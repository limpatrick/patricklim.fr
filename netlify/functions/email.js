const { URL } = require('url');
const AWS = require('aws-sdk');
const Yup = require('yup');
const NetlifyFunctionError = require('../netlify-function-error');

/**
 * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property
 */
const getEmailParams = ({ name, email, message }) => ({
  Destination: {
    ToAddresses: [process.env.PL_EMAIL_TO],
  },
  Message: {
    Body: {
      Text: {
        Charset: 'UTF-8',
        Data: `From:\n${name} <${email}>\n\nMessage:\n${message}`,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: process.env.PL_EMAIL_SUBJECT,
    },
  },
  Source: process.env.PL_EMAIL_TO,
  ReplyToAddresses: [email],
});

exports.handler = async (event, context, callback) => {
  try {
    if (event.httpMethod !== 'POST') throw new NetlifyFunctionError(405);
    if (process.env.PL_NETLIFY_PROD === 'true') {
      const origin = new URL(event.headers.origin);
      const siteURL = new URL(process.env.PL_SITE_URL);

      if (origin.hostname !== siteURL.hostname) throw new NetlifyFunctionError(403);
    }

    const schema = Yup.object({
      name: Yup.string().trim().required(),
      email: Yup.string().email().required(),
      message: Yup.string().trim().required(),
    });
    const requestParams = JSON.parse(event.body);
    const params = await schema.validate(requestParams);
    const emailParams = getEmailParams(params);

    if (process.env.PL_EMAIL_SERVICE === 'true') {
      AWS.config.update({
        accessKeyId: process.env.PL_AWS_ACESS_KEY_ID,
        secretAccessKey: process.env.PL_AWS_SECRET_ACCESS_KEY,
        region: process.env.PL_AWS_REGION,
      });
      await new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(emailParams).promise();

      const statusCode = 200;
      return callback(null, {
        statusCode,
        body: JSON.stringify({ statusCode, message: 'Message sent' }),
      });
    }

    throw new NetlifyFunctionError(403, 'Email service disabled');
  } catch (err) {
    let statusCode = err.statusCode || 500;

    if (err.name === 'ValidationError') statusCode = 422;

    return callback(null, {
      statusCode,
      body: JSON.stringify({
        statusCode,
        message: `Message unsuccesfully sent, error: ${err}`,
        env: {
          PL_EMAIL_SERVICE: process.env.PL_EMAIL_SERVICE,
          PL_EMAIL_SUBJECT: process.env.PL_EMAIL_SUBJECT,
          PL_EMAIL_TO: process.env.PL_EMAIL_TO,
          PL_NETLIFY_PROD: process.env.PL_NETLIFY_PROD,
          PL_SITE_URL: process.env.PL_SITE_URL,
        },
        event,
        context,
      }),
    });
  }
};