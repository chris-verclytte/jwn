import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import ColorSample from 'components/ColorSample';
import FontShowcase from 'components/FontShowcase';
import LightTitle from 'components/LightTitle';
import Recommendation from 'components/Recommendation';
import Project from 'components/Project';
import messages from './messages';
import mainImage from './assets/main-image.png';
import iphoneImage from './assets/iphone-image.png';
import berlineSideImage from './assets/ic-cat-berline.png';
import ecoSideImage from './assets/ic-cat-eco.png';
import vanSideImage from './assets/ic-cat-van.png';
import berlineTopImage from './assets/ic-berline-car-on-map.png';
import ecoTopImage from './assets/ic-eco-car-on-map.png';
import vanTopImage from './assets/ic-van-car-on-map.png';
import profileRemi from './assets/photo-Remi.png';
import profileYan from './assets/photo-Yan.png';
import profileAC from './assets/photo-AC.png';
import macbookConvargo from './assets/macbook-convargo.png';
import macbookFacebook from './assets/macbook-facebook.png';

class CPDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Section>
          <Paragraph
            title="Chauffeur privé"
            subTitle="Une application pour soutenir une croissance fulgurante"
          />
        </Section>

        <img
          src={mainImage}
          style={{ maxWidth: '100%' }}
          alt="Une fille regarde l’application Chauffeur Privé sur smartphone"
        />

        <Section dark>
          <Paragraph
            title="Objectif"
            subTitle="Expérience 0 friction"
          >
            Leader français du marché des VTC, Chauffeur Privé m'a recruté
            en décembre 2015 afin de redesigner leurs applications mobiles
            iOS & Android. L'obejctif était de créer une expérience "0 friction".
            La réflexion fut orientée autour d'une application prévoyante,
            accessible et moderne.
          </Paragraph>
        </Section>

        <Section withBottomDivider>
          <div className={classes.horizontalLayout}>
            <div className={classNames(classes.imageContainer, classes.columnLeft)}>
              <img src={iphoneImage} className={classes.image} alt="L'application Chauffeur Privé sur iPhone"/>
            </div>
            <div className={classes.imageText}>
              <Paragraph
                title="Prévoyante"
                subTitle="Dans son urgence"
                className={classes.withBottomSpace}
              >
                La rapidité de commande est essentielle. C'est pourquoi vous
                pouvez désormais commander un chauffeur en 2 clics.
                L'application anticipe certaines de vos actions, enregistre
                vos préférences de catégorie, d'adresse, et minimise votre
                nombre de clics tout au long de votre expérience d'utilisation.
              </Paragraph>

              <Paragraph
                title="Accessible"
                subTitle="Dans son utilisation"
              >
                L'ergonomie des applications mobiles doit être pensée pour nos
                doigts et leurs mouvements naturels. Ici, cela se traduit par
                une utilisation à une main, où toutes les actions clés sont en
                bas, à portée de pouce.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section withBottomDivider>
          <div className={classNames(classes.horizontalLayout, classes.withBottomSpace)}>
            <div className={classNames(classes.column, 'col-2', classes.columnLeft)}>
              <Paragraph
                title="Moderne"
                subTitle="Dans son identité"
              >
                La nouvelle image de marque de Chauffeur Privé est résolument
                axée vers les jeunes cadres urbains dynamiques. L'interface de
                l'application traduit cet état d'esprit avec une disposition
                des informations claire et harmonieuse ainsi qu'une utilisation
                de couleurs de caractère, sobres et élégantes.
              </Paragraph>
            </div>
            <div className={classNames(classes.column, 'col-3')}>
              <LightTitle>Palette de couleurs</LightTitle>

              <div className={classes.colorSamplesWrapper}>
                <ColorSample
                  name={<span><i>#</i>F2F2F6</span>}
                  sampleColor="#F2F2F6"
                  labelColor="#000000"
                  className={classes.colorSample}
                />
                <ColorSample
                  name={<span><i>#</i>4A479D</span>}
                  sampleColor="#4A479D"
                  className={classes.colorSample}
                />
                <ColorSample
                  name={<span><i>#</i>331748</span>}
                  sampleColor="#331748"
                  className={classes.colorSample}
                />
                <ColorSample
                  name={<span><i>#</i>E20021</span>}
                  sampleColor="#E20021"
                  className={classes.colorSample}
                />
              </div>
            </div>
          </div>

          <div className={classes.horizontalLayout}>
            <div className={classNames(classes.column, 'col-2', classes.columnLeft)}>
              <LightTitle>Véhicules Eco, Berline & Van</LightTitle>
              <LightTitle dark>Du dessus</LightTitle>
              <div className={classes.horizontalLayout}>
                <div className={classNames(classes.column, 'top-car')}>
                  <img src={berlineTopImage} alt="Berline - vue de dessus"/>
                </div>
                <div className={classNames(classes.column, 'top-car')}>
                  <img src={ecoTopImage} alt="Eco - vue de dessus"/>
                </div>
                <div className={classNames(classes.column, 'top-car')}>
                  <img src={vanTopImage} alt="Van - vue de dessus"/>
                </div>
              </div>
              <LightTitle dark>De 3/4</LightTitle>
              <div className={classes.horizontalLayout}>
                <div className={classNames(classes.column, 'side-car')}>
                  <img src={berlineSideImage} alt="Berline - vue de 3/4"/>
                </div>
                <div className={classNames(classes.column, 'side-car')}>
                  <img src={ecoSideImage} alt="Eco - vue de 3/4"/>
                </div>
                <div className={classNames(classes.column, 'side-car')}>
                  <img src={vanSideImage} alt="Van - vue de 3/4"/>
                </div>
              </div>
            </div>
            <div className={classNames(classes.column, 'col-3')}>
              <LightTitle>Police</LightTitle>
              <LightTitle dark>Avenir</LightTitle>
              <FontShowcase/>
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
              name="Yan Hascoet"
              position="CEO & Co-founder"
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
              name="Anne Carole Coen"
              position="CMO"
              picture={profileAC}
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
              name="Rémi Bardoux"
              position="Deputy Head of Product"
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
              linkTo="/projects/convargo/details"
              picture={macbookConvargo}
              name="Convargo"
              description="Des produits pour accélérer la disruption"
              className={classes.project}
            />
            <Project
              linkTo="/projects/facebook/details"
              picture={macbookFacebook}
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
    maxHeight: 500,
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
    marginBottom: 40,
  },
  lightTitle: {
    color: '#9ea0a6',
    fontSize: 12,
    fontWeight: 200,
    marginBottom: 50
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
})(CPDetails);
