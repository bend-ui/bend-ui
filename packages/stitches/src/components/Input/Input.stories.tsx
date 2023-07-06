import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as Meta<typeof Input>;

export const Base: StoryObj<typeof Input> = {};

export const WithIcon = {
  args: {
    icon: <FiSearch />,
  },
};

export const Invalid = {
  args: {
    isInvalid: true,
  },
};

export const WithLabel = {
  args: {
    labelStart: 'http://',
    labelEnd: '.com',
  },
};

export const WithContent = {
  args: {
    contentStart: 'http://',
    contentEnd: '.com',
  },
};
