import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const Section = ({
  children,
  classes,
  contentClassName,
  className,
  dark,
  withBottomDivider,
}) => (
  <section
    className={classNames({
      [classes.container]: true,
      dark,
      withBottomDivider,
      [className]: className,
    })}
  >
    <div
      className={classNames({
        [classes.content]: true,
        [contentClassName]: contentClassName,
      })}
    >
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
  withBottomDivider: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

Section.defaultProps = {
  dark: false,
  withBottomDivider: false,
};

export default injectSheet({
  container: {
    padding: '70px 140px',
    '&.dark': {
      backgroundColor: '#fafafa',
    },
    '&.withBottomDivider $content': {
      // Compensate parent margin to allow display correct divider
      marginBottom: '-70px',
      paddingBottom: 70,
      borderBottom: '1px solid #dddddd',
    },
  },
  content: {},
})(Section);
