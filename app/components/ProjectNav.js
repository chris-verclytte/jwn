import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const ProjectNav = ({ classes, className }) => (
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

ProjectNav.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

ProjectNav.defaultProps = {
  className: '',
};

export default injectSheet({
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
