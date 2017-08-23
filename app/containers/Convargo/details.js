import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import LightTitle from 'components/LightTitle';
import Recommendation from 'components/Recommendation';
import Project from 'components/Project';
import messages from './messages';
import mainImage from './assets/main-image-convargo.png';
import laptopImage from './assets/macbook-convargo-application.png';
import funnelImage from './assets/funnel.png';
import recordingImage from './assets/recording.png';
import heatmapImage from './assets/heatmap.png';
import profileRemi from './assets/photo-Remi.png';
import profileYan from './assets/photo-Yan.png';
import profileAC from './assets/photo-AC.png';
import macbookFacebookImage from './assets/macbook-facebook.png';
import iphoneCPImage from './assets/iphone-chauffeur-prive.png';

class ConvargoDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Section>
          <Paragraph
            title="Convargo"
            subTitle="Des produits pour disrupter l’industrie du transport de marchandises"
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
            subTitle="Digitaliser un secteur archaïque"
          >
            J’ai rejoint Convargo en juin 2016, dès le lancement après
            une levée de fonds de 2 millions d’euros auprès des plus grands
            investisseurs français. L’enjeu était immense : digitaliser
            l’industrie du transport de marchandise, qui pèse près de 43
            milliards d’euros en France. Retour d’expérience.
          </Paragraph>
        </Section>

        <Section withBottomDivider>
          <div className={classes.horizontalLayout}>
            <div className={classNames(classes.imageContainer, classes.columnLeft)}>
              <img src={laptopImage} className={classes.image} alt="La Web Application Convargo" />
            </div>
            <div className={classes.imageText}>
              <Paragraph
                title="Le produit"
                subTitle="Au coeur de la stratégie"
                className={classes.withBottomSpace}
              >
                L’ambition de Convargo est de se différencier, entre autre,
                par son produit. Les TMS (Transport Managament System) ont connu
                très peu d’évolutions au cours des 20 dernières années et
                ressemblent à des fichiers Excel. Proposer un produit ludique et
                innovant était l’enjeu principal dans la stratégie de Convargo.
              </Paragraph>

              <Paragraph
                title="L’utilisateur"
                subTitle="Au coeur de la conception"
              >
                Les retours des utilisateurs sont essentiels. Ils permettent une
                amélioration progressive du produit en adéquation avec leurs
                problématiques métier. C’est pourquoi nous avons organisé plusieurs
                tests utilisateur et mis en place des outils pour tracker leur
                utilisation sur nos différentes plateformes afin d’identifier les
                principaux points de friction.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section withBottomDivider>
          <div className={classNames(classes.horizontalLayout, classes.withBottomSpace)}>
            <div className={classNames(classes.column, 'col-2', classes.columnLeft)}>
              <Paragraph
                title="L’analytics"
                subTitle="Pour aller en profondeur"
                className={classes.stickyParagraph}
              >
                Comme évoqué précédemment, il est fondamental d’échanger régulièrement
                avec ses utilisateurs. Mais il est tout aussi important d’avoir une
                approche analytique : les chiffres ne sont pas biaisés par des points de
                vue et permettent d’étudier des funnels ou des comportements spécifiques.
              </Paragraph>
            </div>
            <div className={classNames(classes.column, 'col-3')}>
              <LightTitle dark>Funnel</LightTitle>
              <div className={classes.imageContainer}>
                <img
                  src={funnelImage}
                  className={classNames(classes.image, classes.analyticsImage)}
                  alt="Entonnoir de conversion de l’application Convargo"
                />
              </div>

              <LightTitle dark>Recording</LightTitle>
              <div className={classes.imageContainer}>
                <img
                  src={recordingImage}
                  className={classNames(classes.image, classes.analyticsImage)}
                  alt="Capture d’écran d'un enregistrement vidéo d'un parcours utilisateur"
                />
              </div>

              <LightTitle dark>Heatmap</LightTitle>
              <div className={classes.imageContainer}>
                <img
                  src={heatmapImage}
                  className={classNames(classes.image, classes.analyticsImage)}
                  alt="Aperçu d’un heatmap montrant l’activité des utilisateurs sur la web application"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section withBottomDivider>
          <Paragraph
            title="Ce qu'ils ont pensé"
            subTitle="De mon travail"
            className={classes.paragraphWithBottomSpace}
          />
          <div className={classNames(classes.horizontalLayout, classes.recommendationContainer)}>
            <Recommendation
              name="Maxime Legardez"
              position="CEO & Founder"
              picture={profileYan}
              className={classes.recommendation}
            >
              "Nos applications mobiles n'avaient pas évolué depuis 2 ans lorsque
              Jordan est arrivé chez Chauffeur Privé, les attentes étaient donc
              élevées. Jordan a su parfaitement améliorer l'expérience globale
              d'utilisation en analysant les principaux points de friction et en
              ayant une réflexion centrée utilisateur. Son autonomie, sa force de
              proposition et sa bonne humeur ont été grandement appréciées au sein
              de l’équipe."
            </Recommendation>
            <Recommendation
              name="Yoann Gotthilf"
              position="CTO"
              picture={profileAC}
              className={classes.recommendation}
            >
              "J’ai eu l’occasion de travailler avec Jordan chez Chauffeur-Privé
              et chez Convargo. Il fut à chaque fois un collaborateur clé de la société.
              Chez Convargo, Jordan a mis en place toute la méthodologie UX.
              Aussi bien impliqué sur la partie business, UX que UI, il a su apporter
              systématiquement une vision juste et argumentée. Humainement, Jordan était
              très agréable et s’entendait parfaitement avec les équipes.
              Ce serait donc un grand plaisir de retravailler avec lui une
              troisième fois !"
            </Recommendation>
            <Recommendation
              name="Yoann Gotthilf"
              position="CTO"
              picture={profileRemi}
              className={classes.recommendation}
            >
              "Nos applications mobiles n'avaient pas évolué depuis 2 ans lorsque
              Jordan est arrivé chez Chauffeur Privé, les attentes étaient donc
              élevées. Jordan a su parfaitement améliorer l'expérience globale
              d'utilisation en analysant les principaux points de friction et en
              ayant une réflexion centrée utilisateur. Son autonomie, sa force de
              proposition et sa bonne humeur ont été grandement appréciées au sein
              de l’équipe."
            </Recommendation>
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
              linkTo="/projects/facebook/details"
              picture={macbookFacebookImage}
              name="Facebook"
              description="Un projet personnel reconnu par mes pairs"
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
    marginBottom: 70,
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
  stickyParagraph: {
    position: 'sticky',
    top: 70, // Same margin than parent
  },
})(ConvargoDetails);
