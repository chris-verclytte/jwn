import React from 'react';
import { PropTypes } from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import PageWithProjectNav from 'components/PageWithProjectNav';
import Paragraph from 'components/Paragraph';
import Link from 'components/Link';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.page.clientHeight);
    console.log('paragraph', this.paragraph.clientHeight);
  }

  render() {
    const { classes } = this.props;
    return (
      <PageWithProjectNav pageClassName={classes.centerContent}>
        <div
          ref={(element) => { this.page = element; }}
          className={classes.midCenterContent}
        >
          <Paragraph
            title="It's all about the why"
            className={classNames(classes.landingParagraph, classes.topPositioned)}
            centered
            ref={(element) => { this.paragraph = element; console.log('paragraphElm', element);}}
          >
            UX/UI designer freelance basé à Paris, je marie les
            besoins des utilisateurs et les intérêts des entreprises
            à travers des expériences fluides et intuitives.
          </Paragraph>
          <div className={classes.verticalLine} />
          <div className={classes.ctaDetails}>
            <Link to="/projects/chauffeur-prive">
              <span className={classNames('jwn-arrow-right', classes.rotatedIcon)} />
            </Link>
          </div>
        </div>
      </PageWithProjectNav>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
  sheet: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default injectSheet({
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
  imageColumn: {},
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  ctaDetails: {
    marginTop: 'auto',
    marginBottom: 40,
  },
  textColumn: {
    display: 'flex',
    alignItems: 'center',
  },
  fullHeight: {
    height: '100%',
  },
  landingParagraph: {
    transform: 'translateY(-50%)',
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: '#EFEFEF',
  },
  midCenterContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  rotatedIcon: {
    display: 'inline-block',
    transform: 'rotate(90deg)',
  },
})(HomePage);
