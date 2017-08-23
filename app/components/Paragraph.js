import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';

const Paragraph = ({ children, classes, className, subTitle, title, ref }) => (
  <article
    className={className}
    ref={ref}
  >
    {title &&
      <div className={classes.title}>{title}</div>
    }
    {subTitle &&
      <div className={classes.subTitle}>{subTitle}</div>
    }
    {children &&
      <p className={classes.paragraph}>
        {children}
      </p>
    }
  </article>
);

Paragraph.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  centered: PropTypes.bool,
  ref: PropTypes.func,
};

Paragraph.defaultProps = {
  className: '',
  ref: () => {},
};

export default injectSheet({
  subTitle: {
    fontSize: 25,
    fontWeight: 100,
    color: '#9ea0a6',
  },
  title: {
    fontSize: 25,
    fontWeight: 300,
    textAlign: ({ centered }) => (centered ? 'center' : 'inherit'),
  },
  paragraph: {
    maxWidth: 500,
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 200,
    color: '#9ea0a6',
    textAlign: ({ centered }) => (centered ? 'center' : 'justify'),
  },
})(Paragraph);
