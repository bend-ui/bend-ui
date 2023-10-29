import { Accordion } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: Accordion } as Meta<typeof Accordion>;

export const DefaultAccordion: StoryObj<typeof Accordion> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
