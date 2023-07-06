import { TbBolt, TbChevronDown } from 'react-icons/tb';
import { Button } from '../Button';
import { Input } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as Meta<typeof Input>;

export const Base: StoryObj<typeof Input> = {};

export const WithIcon = {
  args: {
    icon: <TbBolt />,
  },
};

export const WithStartSection = {
  args: {
    startSection: '$',
  },
};

export const WithEndSection = {
  args: {
    endSection: <TbChevronDown style={{ width: '36px' }} />,
  },
};

export const WithStartLabel = {
  args: {
    startLabel: 'http://',
  },
};

export const WithEndLabel = {
  args: {
    endLabel: <Button variant="ghost">Copy text</Button>,
  },
};
