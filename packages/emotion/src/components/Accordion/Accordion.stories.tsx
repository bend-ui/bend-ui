import { Accordion } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

export const Base: StoryObj<typeof Accordion> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item>Hello</Accordion.Item>
      <Accordion.Item>Bonjour</Accordion.Item>
    </Accordion>
  ),
};
