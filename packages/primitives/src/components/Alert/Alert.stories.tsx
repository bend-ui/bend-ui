import React from 'react';
import { Alert, useAlert } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

type Story = ComponentStory<typeof Alert>;

export const Base: Story = (args) => (
  <Alert.Root {...args}>Alert content</Alert.Root>
);

export const Hook: Story = () => {
  const alertProps = useAlert();
  return <div {...alertProps}>Alert content</div>;
};
