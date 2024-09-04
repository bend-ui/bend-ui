import { LuBell } from 'react-icons/lu';
import { alert } from '@particles/styled-system/recipes';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { Alert } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    palette: {
      control: 'select',
      options: alert.variantMap.palette,
    },
    variant: {
      control: 'select',
      options: alert.variantMap.variant,
    },
  },
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Base: Story = {
  render: (args) => (
    <Alert {...args}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi esse
        unde incidunt quibusdam magnam assumenda veritatis quos labore, nemo
        quidem illum explicabo, saepe corporis voluptatem optio, quas commodi
        consectetur vel.
      </p>
    </Alert>
  ),
};

export const WithIcon: Story = {
  ...Base,
  args: {
    icon: <LuBell />,
  },
};

export const WithTitle: Story = {
  ...Base,
  args: {
    title: 'Watch out!',
  },
};

export const WithIconAndTitle: Story = {
  ...Base,
  args: {
    icon: <LuBell />,
    title: 'Watch out!',
  },
};

export const WithFooter: Story = {
  ...Base,
  args: {
    footer: (
      <ButtonGroup>
        <Button>Learn more</Button>
      </ButtonGroup>
    ),
  },
};

export const Full: Story = {
  ...Base,
  args: {
    icon: <LuBell />,
    title: 'Watch out!',
    footer: (
      <ButtonGroup>
        <Button>Learn more</Button>
      </ButtonGroup>
    ),
  },
};
