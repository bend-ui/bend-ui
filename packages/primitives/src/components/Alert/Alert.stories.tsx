import React from 'react';
import { Alert, useAlert } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

type Story = StoryFn<typeof Alert>;

export const Base: Story = {
  render: (args) => <Alert.Root {...args}>Alert content</Alert.Root>,
};

export const Hook: Story = () => {
  const { getAlertProps } = useAlert();
  return <div {...getAlertProps()}>Alert content</div>;
};
