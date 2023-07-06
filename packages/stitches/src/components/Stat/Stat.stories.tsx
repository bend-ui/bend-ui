import { Stat } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Stat',
  component: Stat,
} as Meta<typeof Stat>;

export const Default: StoryObj<typeof Stat> = {
  render: (args) => (
    <Stat {...args}>
      <Stat.Label>Sent</Stat.Label>
      <Stat.Number>345,670</Stat.Number>
      <Stat.HelpText>23.36%</Stat.HelpText>
    </Stat>
  ),
};
