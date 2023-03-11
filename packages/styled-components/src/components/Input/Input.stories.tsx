import { FiCoffee } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from './Input';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithIcon = Base.bind({});

WithIcon.args = {
  prefix: <FiCoffee />,
};

export const WithButton = Base.bind({});

WithButton.args = {
  suffix: <Button>Click</Button>,
};
