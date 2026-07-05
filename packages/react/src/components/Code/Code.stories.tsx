import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Code } from './Code';

const meta = {
  component: Code,
  tags: ['ai-generated'],
  args: {
    children: 'npm install @bend-ui/react',
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('npm install @bend-ui/react'),
    ).toBeVisible();
  },
};

export const InlineSnippet: Story = {
  render: () => (
    <p>
      Run <Code>pnpm nx build react</Code> to compile the package.
    </p>
  ),
};

export const BlockSnippet: Story = {
  args: {
    children: 'const theme = "default";',
    display: 'block',
    p: 'sm',
    bg: 'bg.surface',
    rounded: 'sm',
  },
};
