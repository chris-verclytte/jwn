import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import Project from 'components/Project';
import mainImage from './assets/main-image-facebook.png';
import laptopImage from './assets/macbook-facebook.png';
import testimonialImage from './assets/medium-jon-moore.png';
import macbookConvargoImage from './assets/macbook-convargo.png';
import iphoneCPImage from './assets/iphone-chauffeur-prive.png';

class FacebookDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Section>
          <Paragraph
            title="Facebook"
            subTitle="Un projet personnel reconnu"
          />
        </Section>

        <img
          src={mainImage}
          style={{ maxWidth: '100%' }}
          alt="Un routier pose devant son camion"
        />

        <Section dark>
          <Paragraph
            title="Objectif"
            subTitle="Moderniser une interface vieillissante"
          >
            Détends-toi, Mark. Il s’agit simplement d’un projet personnel.
            En revanche, il serait temps de faire entrer Facebook dans
            une nouvelle ère. Rapide tour d’horizon de mon redesign de la
            page de profil Facebook ainsi que des réactions engendrées
            dans le milieu du design.

          </Paragraph>
        </Section>

        <Section withBottomDivider>
          <div className={classes.horizontalLayout}>
            <div className={classNames(classes.imageContainer, classes.columnLeft)}>
              <img
                src={laptopImage}
                className={classes.image}
                alt="Aperçu de la refonte graphique de la page d’accueil de Facebook"
              />
            </div>
            <div className={classes.imageText}>
              <Paragraph
                title="Rafraîchissante"
                subTitle="En conservant son identité"
              >
                L’identité Facebook est très prononcée. Aussi bien d’un point
                de vue lexical (”Likes”, “Post”, “Wall”, “Friends”) que visuel
                (le bleu-violet, le pouce levé, la photo de profil & la cover).
                L’objectif était donc de rafraîchir l’ensemble sans écorner ces
                fondamentaux qui ont forgé l’ADN et la réussite de Facebook.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section withBottomDivider>
          <div className={classNames(classes.horizontalLayout)}>
            <div className={classNames(classes.column, 'col-2', classes.columnLeft)}>
              <Paragraph
                title="Primée"
                subTitle="Par Muzli"
              >
                Muzli est une extension de navigateur utilisée par plusieurs
                centaines de milliers de développeurs & designers. L’objectif
                est de “connect passionate people with the inspiration that
                drives them”. L’interface a été élue “Inspiration of the Week”
                sur Medium (+145.000 followers).
              </Paragraph>
            </div>
            <div className={classNames(classes.column, 'col-3')} />
          </div>
        </Section>

        <Section withBottomDivider>
          <div className={classes.horizontalLayout}>
            <div className={classNames(classes.imageContainer, classes.columnLeft)}>
              <img
                src={testimonialImage}
                className={classNames(classes.image, classes.shadowImage)}
                alt="Capture d’écran d'un post Medium de Jon Moore félicitant cette refonte"
              />
            </div>
            <div className={classes.imageText}>
              <Paragraph
                title="Reconnue"
                subTitle="Par Jon Moore"
              >
                Jon Moore est Top Writer Medium dans la catégorie Design. Il est
                suivi par plus de 13 000 personnes et a dédié une partie de
                son article “Guilty Pleasures for Designers” sur mon redesign Facebook.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section>
          <Paragraph
            title="Découvrez"
            subTitle="Mes autres projets"
            className={classes.paragraphWithBottomSpace}
          />
          <div className={classNames(classes.horizontalLayout, classes.projectContainer)}>
            <Project
              linkTo="/projects/chauffeur-prive/details"
              picture={iphoneCPImage}
              name="Chauffeur Privé"
              description="Une application en soutien d’une croissance fulgurante"
              className={classes.project}
            />
            <Project
              linkTo="/projects/convargo/details"
              picture={macbookConvargoImage}
              name="Convargo"
              description="Des produits pour dirupter l’industrie du transport"
              className={classes.project}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default injectSheet({
  horizontalLayout: {
    display: 'flex',
    flexDirection: 'row',
  },
  verticalLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
  },
  shadowImage: {
    boxShadow: '0 15px 60px rgba(0, 0, 0, 0.1)',
  },
  imageText: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 2,
  },
  colorSamplesWrapper: {
    display: 'flex',
  },
  colorSample: {
    marginRight: 30,
  },
  column: {
    minWidth: 0,
    '&.col-2': {
      flex: 2,
    },
    '&.col-3': {
      flex: 3,
    },
    '&.top-car': {
      marginRight: 30,
      '& > img': {
        maxWidth: '100%',
        maxHeight: 40,
      },
    },
    '&.side-car': {
      marginRight: 15,
      '& > img': {
        maxWidth: '100%',
      },
    },
  },
  columnLeft: {
    marginRight: 150,
  },
  withBottomSpace: {
    marginBottom: 70,
  },
  paragraphWithBottomSpace: {
    marginBottom: 40,
  },
  lightTitle: {
    color: '#9ea0a6',
    fontSize: 12,
    fontWeight: 200,
    marginBottom: 50,
  },
  recommendationContainer: {
    margin: '-40px',
  },
  recommendation: {
    padding: 40,
  },
  projectContainer: {
    margin: '-50px',
    justifyContent: 'center',
  },
  project: {
    padding: 50,
  },
  analyticsImage: {
    marginBottom: 100,
  },
})(FacebookDetails);
