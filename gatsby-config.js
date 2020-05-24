const languages = [`en`, `fr`];
const localesPath = `${__dirname}/generated/locales`;

module.exports = {
  siteMetadata: {
    title: `Patrick Lim - Full stack developer`,
    description: `Full stack developer on React and Node.js`,
    author: `Patrick Lim`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: 'generated/graphql-types.ts',
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: 'T',
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitError: false,
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
    },
    {
      resolve: `intl-yaml-to-json`,
      options: {
        languages,
        sourcePath: `${__dirname}/src/locales`,
        destinationPath: localesPath,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: localesPath,
        languages,
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
};
