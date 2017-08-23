import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';

const FontShowcase = ({ classes }) => (
  <div className={classes.container}>
    <p className={classes.greatSample}>Aa</p>
    <p className={classes.normalSample}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
    <p className={classes.normalSample}>abcdefghijklmnopqrstuvwxyz</p>
    <p className={classes.normalSample}>0123456789</p>
  </div>
);

FontShowcase.propTypes = {
  font: PropTypes.string,
};

FontShowcase.defaultProps = {
  font: 'Arial',
};

export default injectSheet({
  container: {
    fontFamily: props => props.font,
  },
  greatSample: {
    margin: 0,
    lineHeight: '1.2em',
    fontSize: 70,
  },
  normalSample: {
    margin: 0,
    lineHeight: '1.2em',
    fontSize: 30,
  }
})(FontShowcase);
