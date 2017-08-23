import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import PageWithProjectNav from 'components/PageWithProjectNav';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import Link from 'components/Link';
import laptopImage from './assets/macbook-facebook.png';

export class Facebook extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <PageWithProjectNav>
        <Section
          className={classes.fullHeight}
          contentClassName={classNames(classes.fullHeight, classes.sectionWithoutMargin)}
        >
          <div className={classNames(classes.row, classes.fullHeight)}>
            <div className={classNames(classes.column, classes.imageColumn, classes.fullHeight)}>
              <img
                className={classes.image}
                src={laptopImage}
                alt="Aperçu de la refonte graphique de la page d’accueil de Facebook"
              />
            </div>
            <div className={classNames(classes.column, classes.textColumn, classes.fullHeight)}>
              <div>
                <Paragraph
                  title="Facebook"
                  className={classes.paragraphWithBottomSpace}
                >
                  Design UX/UI de la page de profil Facebook, étant convaincu
                  que des améliorations peuvent être apportées.
                  Muzli inspiration of the week (#87).
                </Paragraph>

                <Link
                  to="/projects/facebook/details"
                  className={classes.ctaDetails}
                >
                  <span className="jwn-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </PageWithProjectNav>
    );
  }
}

Facebook.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const FacebookWithStyles = injectSheet({
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '-40px',
  },
  column: {
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    padding: 40,
  },
  imageColumn: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  textColumn: {
    display: 'flex',
    alignItems: 'center',
  },
  fullHeight: {
    height: '100%',
  },
  ctaDetails: {},
  paragraphWithBottomSpace: {
    marginBottom: 40,
  },
})(Facebook);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(FacebookWithStyles);
