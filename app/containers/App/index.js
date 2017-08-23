/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Header from 'components/Header';
import 'typeface-titillium-web';
import 'typeface-lato';
import 'assets/fonts/jwn/typeface.css';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.page}>
          {React.Children.toArray(this.props.children)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet({
  container: {
    height: '100%',
  },
  page: {
    height: 'calc(100% - 50px)', // Subtract Header's height
  },
})(App);
