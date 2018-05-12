import * as React from 'react';

import { IoCodeWorking, IoEmail } from 'react-icons/lib/io';
import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { HomeStyles } from './styles';
import Link from 'components/Link';
import { NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { VelocityComponent } from 'velocity-react';
import { scrollbarsContentClass } from 'components/App/styles';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface HomeProps {}

interface HomeState {
  disabled: boolean;
}

class Home extends React.Component<HomeProps & WithStyles<HomeStyles>, HomeState> {
  constructor(props: HomeProps & WithStyles<HomeStyles>) {
    super(props);

    this.state = { disabled: true };
  }

  activateButtons = () => {
    this.setState({ disabled: false });
  }

  getTimelineNavLink: React.SFC = (props) => <NavLink to={'/timeline'} {...props} />;

  render() {
    const { classes } = this.props;
    const { disabled } = this.state;

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.bold} component="h1" variant="display3" align="center">
                <VelocityComponent animation="transition.slideLeftBigIn" duration={1000} delay={1000} runOnMount>
                  <span>Patrick</span>
                </VelocityComponent>{' '}
                <VelocityComponent animation="transition.slideRightBigIn" duration={1000} delay={1000} runOnMount>
                  <span>Lim</span>
                </VelocityComponent>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.light} variant="headline" component="h2">
                <VelocityComponent animation="transition.slideLeftBigIn" duration={1000} delay={1750} runOnMount>
                  <span>Front end</span>
                </VelocityComponent>{' '}
                <VelocityComponent animation="transition.slideRightBigIn" duration={1000} delay={2250} runOnMount>
                  <span className={classes.highlight}>developer</span>
                </VelocityComponent>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <VelocityComponent
                animation="transition.flipXIn"
                duration={1000}
                delay={3250}
                runOnMount
                begin={this.activateButtons}>
                <Grid className={classes.marginTop} container direction="row" justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="body1" component="div" align="center">
                      Have a look at{' '}
                      <Button
                        variant="raised"
                        color="default"
                        size="small"
                        disabled={disabled}
                        component={this.getTimelineNavLink}>
                        <IoCodeWorking className={classes.icon} />
                        Timeline
                      </Button>{' '}
                      to know more about me.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" component="div" align="center">
                      <Button
                        variant="raised"
                        color="default"
                        size="small"
                        disabled={disabled}
                        component={(props) => <Link href="mailto:contact@patricklim.fr" {...props} />}>
                        <IoEmail className={classes.icon} />
                        contact@patricklim.fr
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </VelocityComponent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withVelocityAnimation({ className: scrollbarsContentClass })(withStyles(HomeStyles)(Home));
