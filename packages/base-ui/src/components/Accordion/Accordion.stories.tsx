import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Accordion } from './Accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: (args) => (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            What is Base UI?
            {/* <PlusIcon /> */}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            How do I get started?
            {/* <PlusIcon /> */}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Head to the “Quick start” guide in the docs. If you’ve used unstyled
            libraries before, you’ll feel at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>Can I use it for my project?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>Of course! Base UI is free and open source.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),
  args: {},
};

export const Heading: Story = {
  ...Primary,
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Component!/gi)).toBeTruthy();
  },
};
