import StorybookUI from './storybook';

import App from './src';

module.exports = __DEV__ ? StorybookUI : App; // eslint-disable-line
