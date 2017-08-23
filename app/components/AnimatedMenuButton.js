import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

class AnimatedMenuButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: this.props.opened || false,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.opened !== null && nextProps.opened !== this.props.opened) {
      this.setState({ opened: nextProps.opened });
    }
  }

  onClick() {
    if (this.props.opened !== null) this.props.onClick(this.state.opened);
    else this.setState({ opened: !this.state.opened, });
  }

  render() {
    const { classes, className } = this.props;
    return (
      <div
        className={classNames({
          [classes.container]: true,
          [className]: !!className,
          open: this.state.opened,
        })}
        onClick={this.onClick}
      >
        <div className="icon"></div>
      </div>
    );
  }
}

AnimatedMenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  opened: PropTypes.bool,
};

AnimatedMenuButton.defaultProps = {
  onClick: () => {},
  opened: null,
};

export default injectSheet({
  container: {
    width: 25,
    height: 25,
    transitionDuration: '0.5s',
    '& .icon': {
      transitionDuration: '0.5s',
      position: 'relative',
      height: 0,
      width: 25,
      top: 15,
      backgroundColor: '#212121',
      '&:before': {
        transitionDuration: '0.5s',
        position: 'absolute',
        width: 25,
        height: 2,
        backgroundColor: '#212121',
        content: '""',
        top: '-8px',
      },
      '&:after': {
        transitionDuration: '0.5s',
        position: 'absolute',
        width: 25,
        height: 2,
        backgroundColor: '#212121',
        content: '""',
        top: 4,
      },
    },
    '&.open': {
      '& .icon': {
        transitionDuration: '0.5s',
        '&:before': {
          transform: 'rotateZ(45deg) translate(0px, 8px)',
        },
        '&:after': {
          transform: 'rotateZ(-45deg) translate(0px, -8px)',
        },
      },
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
})(AnimatedMenuButton);

