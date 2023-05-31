import { TbAlertTriangle } from 'react-icons/tb';
import { Stack } from '../Stack';
import { Divider } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  component: Divider,
  title: 'Components/Layout/Divider',
} as Meta<typeof Divider>;

export const Usage: StoryObj<typeof Divider> = {};

export const WithContent: StoryObj<typeof Divider> = {
  render: (args) => (
    <Stack>
      <Divider {...args}>Label</Divider>
      <Divider {...args}>
        <TbAlertTriangle />
      </Divider>
    </Stack>
  ),
};
