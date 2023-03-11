import { Accordion } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Base: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item>Hello</Accordion.Item>
    <Accordion.Item>Bonjour</Accordion.Item>
  </Accordion>
);
