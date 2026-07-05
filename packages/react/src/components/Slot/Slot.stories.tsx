import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from '../Button';
import { Slot } from './Slot';

const meta = {
  component: Slot,
  tags: ['ai-generated'],
} satisfies Meta<typeof Slot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Slot className="slot-wrapper">
      <Button>Slotted button</Button>
    </Slot>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: 'Slotted button' }),
    ).toBeVisible();
  },
};

export const MergesProps: Story = {
  render: () => (
    <Slot data-testid="slot-target" className="merged-class">
      <button type="button">Native button</button>
    </Slot>
  ),
};

export const AsChildLink: Story = {
  render: () => (
    <Slot>
      <a href="https://example.com">Example link</a>
    </Slot>
  ),
};
