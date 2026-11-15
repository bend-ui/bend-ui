import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Export data',
    value: 40,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Preparing export',
    value: null,
  },
};

function SimulatedProgress() {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25)),
      );
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return <Progress label="Export data" value={value} />;
}

export const Simulated: Story = {
  render: () => <SimulatedProgress />,
};

export const Composed: Story = {
  render: () => (
    <Progress.Root value={65}>
      <Progress.Label>Upload</Progress.Label>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
      <Progress.Value />
    </Progress.Root>
  ),
};
