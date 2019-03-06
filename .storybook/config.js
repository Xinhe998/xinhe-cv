import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';
addParameters({
    options: {
      name: 'Foo',
      theme: themes.dark,
    },
  });
function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);