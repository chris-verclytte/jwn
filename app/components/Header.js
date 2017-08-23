import React, { Component } from 'react';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AnimatedMenuButton from './AnimatedMenuButton';
import logo from '../assets/logo_jwn.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { classes } = this.props;
    const { opened } = this.state;
    return (
      <nav
        className={classNames({
          [classes.container]: true,
          opened,
        })}
      >
        <div className={classes.menuMainBar}>
          <div className={classes.menuContainer}>
            <div className={classNames(classes.menuColumn, classes.logoContainer)}>
              <Link
                to="/"
                onClick={this.toggleMenu}
              >
                <img
                  className={classes.logo}
                  src={logo}
                  alt="Logo JWN"
                />
              </Link>
            </div>
            <div className={classes.menuColumn}>
              {opened &&
                <span className={classes.menuTitle}>– Projets</span>
              }
            </div>
            <div className={classes.menuColumn}>
              {opened &&
                <span className={classes.menuTitle}>– Contact</span>
              }
            </div>
          </div>

          <AnimatedMenuButton
            onClick={this.toggleMenu}
            opened={this.state.opened}
            className={classes.menuButton}
          />
        </div>
        <div className={classes.menuContent}>
          <div className={classNames(classes.menuColumn, 'social-networks')}>
            <ul className={classes.list}>
              <li className={classes.socialNetwork}>
                <a
                  href="https://fr.linkedin.com/in/jordanwn"
                  className={classNames(classes.link, 'socialNetworkLink')}
                  onClick={this.toggleMenu}
                >
                  Linkedin
                </a>
              </li>
              <li className={classes.socialNetwork}>
                <a
                  href="https://dribbble.com/jordanwn"
                  className={classNames(classes.link, 'socialNetworkLink')}
                  onClick={this.toggleMenu}
                >
                  Dribbble
                </a>
              </li>
              <li className={classes.socialNetwork}>
                <a
                  href="https://medium.com/@jordanwn"
                  className={classNames(classes.link, 'socialNetworkLink')}
                  onClick={this.toggleMenu}
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>

          <div className={classes.menuColumn}>
            <ul className={classes.list}>
              <li className={classes.projectName}>
                <Link
                  to="/projects/chauffeur-prive/details"
                  onClick={this.toggleMenu}
                  className={classNames(classes.link, 'projectLink')}
                >
                  Chauffeur Privé
                </Link>
              </li>
              <li className={classes.projectName}>
                <Link
                  to="/projects/convargo/details"
                  onClick={this.toggleMenu}
                  className={classNames(classes.link, 'projectLink')}
                >
                  Convargo
                </Link>
              </li>
              <li className={classes.projectName}>
                <Link
                  to="/projects/facebook/details"
                  onClick={this.toggleMenu}
                  className={classNames(classes.link, 'projectLink')}
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          <div className={classNames(classes.menuColumn, 'contact')}>
            <p className={classes.contactParagraph}>
              <span className={classes.bold}>Email</span><br />
              <a
                href="mailto:bonjour@jordanwarmoes.com"
                className={classNames(classes.link, 'emailLink')}
                onClick={this.toggleMenu}
              >
                bonjour@jordanwarmoes.com
              </a>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet({
  container: {
    position: 'relative',
    '&.opened': {
      backgroundColor: '#ffffff',
      '& $menuContent': {
        display: 'flex',
        boxShadow: '0 25px 34px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  menuMainBar: {
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 100px',
  },
  menuContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  menuContent: {
    display: 'none',
    position: 'absolute',
    justifyContent: 'space-around',
    top: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '50px 100px',
    zIndex: 2,
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    right: 75,
  },
  menuColumn: {
    flex: 1,
    '&.social-networks, &.contact': {
      paddingTop: 15,
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    maxHeight: 20,
  },
  menuTitle: {
    color: '#9ea0a6',
    fontSize: 14,
  },
  list: {
    margin: 0,
    padding: 0,
  },
  socialNetwork: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 10,
  },
  projectName: {
    fontWeight: 300,
    fontSize: 35,
    marginBottom: 40,
  },
  contactParagraph: {
    margin: 0,
  },
  bold: {
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    '&.projectLink, &.socialNetworkLink': {
      color: '#000000',
    },
    '&.emailLink': {
      paddingLeft: 15,
      fontWeight: 300,
      color: '#9ea0a6',
    },
  },
})(Header);
