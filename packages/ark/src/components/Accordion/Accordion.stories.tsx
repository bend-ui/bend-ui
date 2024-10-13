import { LuChevronDown } from 'react-icons/lu';
import { Accordion } from './Accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Base: Story = {
  render: (args) => (
    <Accordion.Root defaultValue={['React']} {...args}>
      {['React', 'Solid', 'Vue'].map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <LuChevronDown />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};
