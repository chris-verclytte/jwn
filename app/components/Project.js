import React, { Component } from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const Project = ({ classes, className, linkTo, name, picture, description }) => (
  <div className={classNames(classes.container, className)}>
    <Link to={linkTo} className={classes.link}>
      <img className={classes.picture} src={picture} alt={`Aperçu du projet ${name}`} />
      <p className={classes.name}>{name}</p>
      <p className={classes.description}>{description}</p>
    </Link>
  </div>
);

Project.propTypes = {
  className: PropTypes.string,
  picture: PropTypes.node,
  name: PropTypes.string,
  linkTo: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.object,
};

Project.defaultProps = {
  children: null,
  picture: null,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default injectSheet({
  container: {},
  picture: {
    maxHeight: 300,
    marginBottom: 20,
  },
  link: {
    textDecoration: 'none',
  },
  name: {
    color: '#000000',
    textAlign: 'center',
    margin: 0,
    fontSize: 18,
    fontWeight: 500,
  },
  description: {
    textAlign: 'center',
    margin: 0,
    fontSize: 16,
    color: '#9ea0a6',
    fontWeight: 200,
  },
})(Project);
