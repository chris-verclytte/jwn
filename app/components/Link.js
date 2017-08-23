import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router';
import injectSheet from 'react-jss';

const Link = ({ classes, to, target, children }) => (
  <ReactRouterLink
    to={to}
    target={target}
    className={classes.link}
  >
    {children}
  </ReactRouterLink>
);

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  classes: PropTypes.object,
  children: PropTypes.node,
  target: PropTypes.string,
};

export default injectSheet({
  link: {
    background: '#ff5350',
    boxShadow: '0 5px 16px 0px rgba(255, 83, 80, 0.3)',
    color: '#fff',
    padding: '4px 8px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'none',
      outline: 'none',
    },
  },
})(Link);
