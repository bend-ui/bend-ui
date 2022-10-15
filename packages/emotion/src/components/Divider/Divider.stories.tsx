import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TbAlertTriangle } from 'react-icons/tb';
import { Stack } from '../Stack';
import { Divider } from '.';

export default {
  component: Divider,
  title: 'Components/Layout/Divider',
} as ComponentMeta<typeof Divider>;

export const Usage: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const WithContent: ComponentStory<typeof Divider> = (args) => (
  <Stack>
    <Divider {...args}>Label</Divider>
    <Divider {...args}>
      <TbAlertTriangle />
    </Divider>
  </Stack>
);
