// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(location, cb) {
        import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },{
      path: '/contact',
      name: 'contact',
      getComponent(location, cb) {
        import('containers/Contact')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects/chauffeur-prive',
      name: 'chauffeur-prive',
      getComponent(location, cb) {
        import('containers/CP')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects/chauffeur-prive/details',
      name: 'chauffeur-prive-details',
      getComponent(location, cb) {
        import('containers/CP/details')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects/convargo',
      name: 'convargo',
      getComponent(location, cb) {
        import('containers/Convargo')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects/convargo/details',
      name: 'convargo-details',
      getComponent(location, cb) {
        import('containers/Convargo/details')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },{
      path: '/projects/facebook',
      name: 'facebook',
      getComponent(location, cb) {
        import('containers/Facebook')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects/facebook/details',
      name: 'facebook-details',
      getComponent(location, cb) {
        import('containers/Facebook/details')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
