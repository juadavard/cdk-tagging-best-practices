import {
  App,
} from 'aws-cdk-lib';

import { CustomStack } from './stack';

const app = new App();

new CustomStack(app, 'Stack', {
  securityTags: 3,
});

