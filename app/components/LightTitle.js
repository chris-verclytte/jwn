import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const ColorSample = ({ classes, className, children }) => (
  <p className={classNames(classes.container, className)}>
    {children}
  </p>
);

ColorSample.propTypes = {
  dark : PropTypes.bool,
  children: PropTypes.node,
};

ColorSample.defaultProps = {
  dark: false,
  children: null,
};

export default injectSheet({
  container: {
    color: ({ dark }) => dark ? '#000000' : '#9ea0a6',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 50
  },
})(ColorSample);
