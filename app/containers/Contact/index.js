import React from 'react';
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
import cupImage from './assets/cup.png';

export class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
              <img className={classes.image} src={cupImage} alt="Coffee cup 'Talk together'" />
            </div>
            <div className={classNames(classes.column, classes.textColumn, classes.fullHeight)}>
              <div>
                <Paragraph
                  title="Construisons, ensemble"
                  className={classes.paragraphWithBottomSpace}
                >
                  Je serai ravi d’échanger de vive voix avec vous pour
                  discuter de votre projet et de vos ambitions.<br />
                  Rencontrons-nous !
                </Paragraph>

                <Link
                  to="mailto:bonjour@jordanwarmoes.com"
                  className={classes.ctaDetails}
                >
                  <span className="jwn-paper-plane" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </PageWithProjectNav>
    );
  }
}

Contact.propTypes = {
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
    justifyContent: 'center',
  },
  image: {
    maxHeight: 350,
    maxWidth: '175%',
    marginLeft: '-75%', // This size is set to avoid considering cup shadow
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
})(Contact);


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CPWithStyles);
