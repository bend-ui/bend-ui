import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stat } from './';

export default {
  title: 'Components/Stat',
  component: Stat,
} as ComponentMeta<typeof Stat>;

export const Default: ComponentStory<typeof Stat> = (args) => (
  <Stat {...args}>
    <Stat.Label>Sent</Stat.Label>
    <Stat.Number>345,670</Stat.Number>
    <Stat.HelpText>23.36%</Stat.HelpText>
  </Stat>
);
