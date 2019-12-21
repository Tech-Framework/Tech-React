import { configure, addDecorator  } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);

addDecorator(withInfo); 


  