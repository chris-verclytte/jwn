import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const ColorSample = ({ classes, className, name }) => (
  <div className={classNames(classes.container, className)}>
    <div className={classes.label}>{name}</div>
  </div>
);

ColorSample.propTypes = {
  className: PropTypes.string,
  name: PropTypes.node,
  sampleColor: PropTypes.string,
  labelColor: PropTypes.string,
  classes: PropTypes.object,
};

ColorSample.defaultProps = {
  name: (<span><i>#</i>000000</span>),
  sampleColor: '#000000',
  labelColor: '#ffffff',
};

export default injectSheet({
  container: {
    position: 'relative',
    color: "#ffffff",
    fontSize: 12,
    height: 110,
    width: 95,
    backgroundColor: props => props.sampleColor,
  },
  label: {
    color: props => props.labelColor,
    position: 'absolute',
    fontWeight: 300,
    bottom: 10,
    right: 10,
  },
})(ColorSample);
