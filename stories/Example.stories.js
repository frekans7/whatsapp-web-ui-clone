import React from 'react';

import { Button, IconButton, ImageExample } from '../components';
import * as Icons from '../components/icons';

export default {
  title: 'Example',
};

export const simpleButton = (args) => <Button {...args}>Click me</Button>;

export const IconButtonExample = (args) => (
  <IconButton {...args}>
    <Icons.Notifications />
  </IconButton>
);
export const Image = () => <ImageExample />;
