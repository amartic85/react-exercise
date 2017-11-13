import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true, // Toggles display of header with component name and description
});

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);