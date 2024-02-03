import { TbLock, TbUser } from 'react-icons/tb';
import { Input } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Base: Story = {};

export const WithIcon: Story = {
  args: { icon: <TbUser /> },
};

export const Password: Story = {
  args: { icon: <TbLock />, type: 'password' },
};
