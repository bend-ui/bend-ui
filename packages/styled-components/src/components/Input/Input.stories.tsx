import { FiCoffee } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from './Input';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta<typeof Input>;

export const Base: StoryObj<typeof Input> = {};

export const WithIcon = {
  args: {
    prefix: <FiCoffee />,
  },
};

export const WithButton = {
  args: {
    suffix: <Button>Click</Button>,
  },
};
