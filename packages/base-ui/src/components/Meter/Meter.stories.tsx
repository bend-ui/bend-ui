import { Meter } from './Meter';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Meter> = {
  title: 'Meter',
  component: Meter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
