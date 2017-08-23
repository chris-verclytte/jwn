import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const Recommendation = ({ classes, className, name, picture, position, children }) => (
  <div className={classNames(classes.container, className)}>
    <img className={classes.picture} src={picture} alt={`Photo de ${name}`}/>
    <p className={classes.name}>{name}</p>
    <p className={classes.position}>{position}</p>
    <p className={classes.text}>{children}</p>
  </div>
);

Recommendation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  picture: PropTypes.node,
  name: PropTypes.string,
  position: PropTypes.string,
  classes: PropTypes.object,
};

Recommendation.defaultProps = {
  children: null,
  picture: null,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default injectSheet({
  container: {},
  name: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
  },
  picture: {
    maxHeight: 80,
    marginBottom: 20,
  },
  position: {
    margin: 0,
    fontSize: 16,
    color: '#9ea0a6',
    fontWeight: 300,
  },
  text: {
    fontSize: 14,
    fontWeight: 300,
    color: '#9ea0a6',
    textAlign: 'justify',
  },
})(Recommendation);
