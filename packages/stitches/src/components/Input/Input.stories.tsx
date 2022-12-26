import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiSearch } from 'react-icons/fi';
import { Input } from './';

export default {
  title: 'Components/Forms/Input',
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

export const WithLabel = Base.bind({});

WithLabel.args = {
  labelStart: 'http://',
  labelEnd: '.com',
};

export const WithContent = Base.bind({});

WithContent.args = {
  contentStart: 'http://',
  contentEnd: '.com',
};
