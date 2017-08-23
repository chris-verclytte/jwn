import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import ProjectNav from 'components/ProjectNav';

const withProjectNav = ({ classes, children, ...props }) => (
  <div className={classes.fullHeight}>
    <ProjectNav className={classes.projectNav} />
    {React.Children.map(children, child => React.createElement(child, props))}
  </div>
);

withProjectNav.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default injectSheet({
  fullHeight: {
    height: '100%',
  },
  projectNav: {
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    right: 75,
  },
})(withProjectNav);
