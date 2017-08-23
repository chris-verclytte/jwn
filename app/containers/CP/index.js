import React  from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import PageWithProjectNav from 'components/PageWithProjectNav';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import Link from 'components/Link';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import iphoneImage from '../../assets/cp-iphone-image.png';

export class CP extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
              <img className={classes.image} src={iphoneImage} alt="Chauffeur Privé sur iPhone" />
            </div>
            <div className={classNames(classes.column, classes.textColumn, classes.fullHeight)}>
              <div>
                <Paragraph
                  title="Chauffeur Privé"
                  className={classes.paragraphWithBottomSpace}
                >
                  Design UX/UI des applications iOS & Android,
                  utilisées par 1 million de personnes en France et élue
                  meilleure application française de l’année par Google.
                </Paragraph>

                <Link
                  to="/projects/chauffeur-prive/details"
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

CP.propTypes = {
  classes: PropTypes.object,
};

const CPWithStyles = injectSheet({
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
})(CP);


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CPWithStyles);
