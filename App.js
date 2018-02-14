import StorybookUI from './storybook';

import App from './src';

// const __DEV__ = false;
module.exports = __DEV__ ? StorybookUI : App; // eslint-disable-line
