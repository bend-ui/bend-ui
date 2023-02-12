import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert, useAlert } from '.';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

type Story = ComponentStory<typeof Alert>;

export const Base: Story = (args) => {
  return <Alert.Root {...args}>Alert content</Alert.Root>;
};

export const Hook: Story = () => {
  const alertProps = useAlert();
  return <div {...alertProps}>Alert content</div>;
};
