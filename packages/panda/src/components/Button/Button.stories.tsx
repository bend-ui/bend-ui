import { css } from '@particles/panda-system/css';
import { TbArrowRight, TbCloudDownload } from 'react-icons/tb';
import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Controls/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** The default button styles */
export const Base: Story = {};

/** Primary styles for the button */
export const Primary: Story = {
  args: { palette: 'primary' },
};

/** Danger styles for the button */
export const Danger: Story = {
  args: {
    palette: 'danger',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <TbCloudDownload />,
  },
};

export const WithIconEnd: Story = {
  args: {
    iconEnd: <TbArrowRight />,
  },
};

export const IconButton: Story = {
  args: {
    children: null,
    icon: <TbCloudDownload />,
  },
};

export const Polymorphic: Story = {
  args: {
    as: 'a',
  },
};

export const WithCSSProp: Story = {
  args: {
    css: css.raw({
      color: 'red.500',
    }),
  },
};

export const WithSystemProp: Story = {
  render: (args) => <Button {...args} color="bg.primary" />,
};
