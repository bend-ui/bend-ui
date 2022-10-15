import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiSearch } from 'react-icons/fi';
import { Input } from './';

export default {
  title: 'Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithIcon = Base.bind({});

WithIcon.args = {
  icon: <FiSearch />,
};

export const Invalid = Base.bind({});

Invalid.args = {
  isInvalid: true,
};
