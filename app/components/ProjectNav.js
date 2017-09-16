import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

const STEPS_PATHS = [
  '/',
  '/projects/chauffeur-prive',
  '/projects/convargo',
  '/projects/facebook',
  '/contact',
];

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.handleStopScrolling = this.handleStopScrolling.bind(this);
    this.state = {
      isScrolling: false,
      direction: 'forward',
    };
    this.timer = null;
  }

  componentDidMount() {
    document.addEventListener('wheel', this.handleMouseWheel, false);
    // Firefox
    document.addEventListener('DOMMouseScroll', this.handleMouseWheel, false);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleMouseWheel, false);
    // Firefox
    document.removeEventListener('DOMMouseScroll', this.handleMouseWheel, false);
  }

  handleMouseWheel(DOMEvent) {
    // cross-browser wheel delta
    const event = window.event || DOMEvent; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    const direction = delta === 1 ? 'forward' : 'backward';

    if (!this.state.isScrolling || this.state.direction !== direction) {
      this.setState({
        isScrolling: true,
        direction,
      });
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(this.handleStopScrolling, 50);
  }

  handleStopScrolling() {
    if (this.state.isScrolling) {
      // Retrieve current path
      const indexOfPath = STEPS_PATHS.findIndex((path) => this.props.location.pathname === path);

      // Compute next path
      let nextPathIndex = (this.state.direction === 'forward') ?
        indexOfPath + 1 : indexOfPath - 1;
      if (nextPathIndex < 0) nextPathIndex = STEPS_PATHS.length - 1;
      else if (nextPathIndex === STEPS_PATHS.length) nextPathIndex = 0;

      // Navigate
      this.props.router.replace(STEPS_PATHS[nextPathIndex]);
      this.setState({ isScrolling: false });
    }
  }

  render() {
    const { classes, className } = this.props;
    return (
      <div className={className}>
        <div className={classes.menu}>
          <Link
            to="/"
            onlyActiveOnIndex
            className={classes.link}
            activeClassName={classes.activeLink}
          >
          01
          </Link>
        </div>

        <div className={classes.menu}>
          <Link
            to="/projects/chauffeur-prive"
            onlyActiveOnIndex
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            02
            </Link>
        </div>

        <div className={classes.menu}>
          <Link
            to="/projects/convargo"
            onlyActiveOnIndex
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            03
          </Link>
        </div>
        <div className={classes.menu}>
          <Link
            to="/projects/facebook"
            onlyActiveOnIndex
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            04
          </Link>
        </div>

        <div className={classes.menu}>
          <Link
            to="/contact"
            onlyActiveOnIndex
            className={classes.link}
            activeClassName={classes.activeLink}
          >
          05
          </Link>
        </div>
      </div>
    );
  }
}

ProjectNav.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

ProjectNav.defaultProps = {
  className: '',
};

const ProjectNavWithStyles = injectSheet({
  container: {
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
  },
  menu: {
    padding: '5px 0',
    transform: 'rotateZ(90deg)',
  },
  link: {
    fontFamily: 'Titillium Web',
    fontWeight: 600,
    fontSize: 12,
    color: '#dddddd',
    textDecoration: 'none',
  },
  activeLink: {
    color: '#000',
  },
})(ProjectNav);

export default withRouter(ProjectNavWithStyles);
