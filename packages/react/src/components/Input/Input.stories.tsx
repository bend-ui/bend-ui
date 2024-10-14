import {
  ArrowRightCircleIcon,
  CheckIcon,
  LockIcon,
  UserIcon,
} from 'lucide-react';
import { Box, Flex } from '@particles/styled-system/jsx';
import { Button } from '../Button';
import { Input } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Forms/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const WithIcon: Story = {
  args: { icon: <UserIcon /> },
};

export const WithIconEnd: Story = {
  args: { iconEnd: <CheckIcon /> },
};

/** By default the addons don't have spacing, you'll have to add it yourself. */
export const WithAddonStart: Story = {
  args: {
    addonStart: (
      <Box color="text.subtle" pl="3" pointerEvents="none">
        https://
      </Box>
    ),
  },
};

export const WithAddonEnd: Story = {
  args: {
    addonEnd: (
      <Box pl="2" pr="1.5">
        <Button size="sm">Search</Button>
      </Box>
    ),
  },
};

export const WithAddons: Story = {
  args: {
    addonStart: (
      <Box color="text.subtle" pl="3">
        https://
      </Box>
    ),
    addonEnd: (
      <Box pl="2" pr="1.5">
        <Button size="sm">Go</Button>
      </Box>
    ),
  },
};

/**
 * > Combination of icon and addon is not working, if needed place the icon in the addonStart.
 */
export const WithIconAndAddon: Story = {
  args: {
    // icon: <LuArrowRightCircle />,
    // iconEnd: <LuCheck />,
    addonStart: (
      <Flex alignItems="center" color="text.subtle" gap="2" pl="3">
        <ArrowRightCircleIcon />
        https://
      </Flex>
    ),
    addonEnd: (
      <Flex alignItems="center" gap="2" pl="2" pr="1.5">
        <CheckIcon />
        <Button size="sm">Go</Button>
      </Flex>
    ),
  },
};

export const Password: Story = {
  args: { iconEnd: <LockIcon />, type: 'password' },
};
