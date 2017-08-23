import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Titillium Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100%;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Titillium Web', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
