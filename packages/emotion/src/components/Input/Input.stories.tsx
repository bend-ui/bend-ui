import { TbBolt, TbChevronDown } from 'react-icons/tb';
import { Button } from '../Button';
import { Input } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithIcon = Base.bind({});

WithIcon.args = {
  icon: <TbBolt />,
};

export const WithStartSection = Base.bind({});

WithStartSection.args = {
  startSection: '$',
};

export const WithEndSection = Base.bind({});

WithEndSection.args = {
  endSection: <TbChevronDown style={{ width: '36px' }} />,
};

export const WithStartLabel = Base.bind({});

WithStartLabel.args = {
  startLabel: 'http://',
};

export const WithEndLabel = Base.bind({});

WithEndLabel.args = {
  endLabel: <Button variant="ghost">Copy text</Button>,
};
