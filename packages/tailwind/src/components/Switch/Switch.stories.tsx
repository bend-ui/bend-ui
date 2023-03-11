import { TbCheck } from 'react-icons/tb';
import { Switch } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;

type Story = ComponentStory<typeof Switch>;

/**
 * Switch is cool
 */

export const Base: Story = (args) => <Switch {...args} />;

export const WithLabel: Story = Base.bind({});

WithLabel.args = {
  onLabel: 'Toggle option',
};

export const WithLabels: Story = Base.bind({});

WithLabels.args = {
  onLabel: 'On',
  offLabel: 'Off',
};

export const WithThumbIcon: Story = Base.bind({});

WithThumbIcon.args = {
  thumbIcon: <TbCheck />,
};
