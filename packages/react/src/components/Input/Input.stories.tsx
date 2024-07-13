import { LuArrowRightCircle, LuCheck, LuLock, LuUser } from 'react-icons/lu';
import { Box, Flex } from '@particles/styled-system/jsx';
import { Button } from '../Button';
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
  args: { icon: <LuUser /> },
};

export const WithIconEnd: Story = {
  args: { iconEnd: <LuCheck /> },
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
        <LuArrowRightCircle />
        https://
      </Flex>
    ),
    addonEnd: (
      <Flex alignItems="center" gap="2" pl="2" pr="1.5">
        <LuCheck />
        <Button size="sm">Go</Button>
      </Flex>
    ),
  },
};

export const Password: Story = {
  args: { iconEnd: <LuLock />, type: 'password' },
};
