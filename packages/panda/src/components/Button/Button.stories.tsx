import { css } from '@particles/styled-system/css';
import { Stack } from '@particles/styled-system/jsx';
import { TbArrowRight, TbCloudDownload } from 'react-icons/tb';
import { button } from '@particles/styled-system/recipes';
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

export const Palette: Story = {
  render: (args) => (
    <Stack>
      {button.variantMap.palette.map((palette) => (
        <Button key={palette} {...args} palette={palette} />
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Stack>
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack>
      {button.variantMap.size.map((size) => (
        <Button key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
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
