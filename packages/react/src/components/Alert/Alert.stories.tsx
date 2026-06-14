import { BellIcon } from 'lucide-react';
import { alert } from '@bend-ui/styled-system/recipes';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { Alert } from './Alert';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import { Text } from '../Text';

const variants = alert.variantMap.variant;
const palettes = alert.variantMap.palette;

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    palette: {
      control: 'select',
      options: palettes,
    },
    variant: {
      control: 'select',
      options: variants,
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

export const Variants: Story = {
  render: (args) => (
    <Stack align="flex-start">
      {variants.map((variant) => (
        <Stack key={variant} align="flex-start" gap="md">
          <Text variant="caption">{variant}</Text>
          <Alert key={variant} {...args} variant={variant}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              esse unde incidunt quibusdam magnam assumenda veritatis quos
              labore, nemo quidem illum explicabo, saepe corporis voluptatem
              optio, quas commodi consectetur vel.
            </p>
          </Alert>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Palettes: Story = {
  render: (args) => (
    <Stack align="flex-start">
      {palettes.map((palette) => (
        <Stack key={palette} align="flex-start" gap="md">
          <Text variant="caption">{palette}</Text>
          <Alert
            key={palette}
            {...args}
            palette={palette}
            title="Watch out!"
            icon={<BellIcon />}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              esse unde incidunt quibusdam magnam assumenda veritatis quos
              labore, nemo quidem illum explicabo, saepe corporis voluptatem
              optio, quas commodi consectetur vel.
            </p>
          </Alert>
        </Stack>
      ))}
    </Stack>
  ),
};

export const WithIcon: Story = {
  ...Base,
  args: {
    icon: <BellIcon />,
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
    icon: <BellIcon />,
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
    icon: <BellIcon />,
    title: 'Watch out!',
    footer: (
      <ButtonGroup>
        <Button>Learn more</Button>
      </ButtonGroup>
    ),
  },
};

export const WithDismiss: Story = {
  ...Base,
  args: {
    onDismiss: () => console.log('dismissed'),
  },
};

export const Composition: Story = {
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Icon>
        <BellIcon />
      </Alert.Icon>
      <Alert.Title>Watch out!</Alert.Title>
      <Alert.Content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi esse
          unde incidunt quibusdam magnam assumenda veritatis quos labore, nemo
          quidem illum explicabo, saepe corporis voluptatem optio, quas commodi
          consectetur vel.
        </p>
      </Alert.Content>
      <Alert.Footer
        css={{
          gridColumn: '-1 / 1',
          display: 'flex',
          justifyContent: 'start',
          gap: 'md',
        }}
      >
        <ButtonGroup>
          <Button>Learn more</Button>
        </ButtonGroup>
        <Alert.Dismiss onClick={() => console.log('dismissed')}>
          Dismiss
        </Alert.Dismiss>
      </Alert.Footer>
    </Alert.Root>
  ),
};
