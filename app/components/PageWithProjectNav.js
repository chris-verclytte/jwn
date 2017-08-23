import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import ProjectNav from 'components/ProjectNav';

const PageWithProjectNav = ({ children, classes, className, pageClassName }) => (
  <div className={classNames(className, classes.fullHeight)}>
    <ProjectNav className={classes.projectNav} />
    <div className={classNames(classes.page, classes.fullHeight, pageClassName)}>
      {children}
    </div>
  </div>
);

PageWithProjectNav.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  pageClassName: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

PageWithProjectNav.defaultProps = {
  className: '',
};

export default injectSheet({
  fullHeight: {
    height: '100%',
  },
  page: {
    marginRight: 90, // Compensate project nav size
  },
  projectNav: {
    width: 15,
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    right: 75,
  },
})(PageWithProjectNav);
