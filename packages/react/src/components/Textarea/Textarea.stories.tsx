import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { textarea } from '@bend-ui/styled-system/recipes';
import { Textarea } from './Textarea';

const meta = {
  component: Textarea,
  tags: ['ai-generated'],
  argTypes: {
    variant: {
      control: 'select',
      options: textarea.variantMap.variant,
    },
    size: {
      control: 'select',
      options: textarea.variantMap.size,
    },
  },
  args: {
    placeholder: 'Leave a comment…',
    rows: 4,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Solid: Story = {
  args: {
    variant: 'solid',
    defaultValue: 'Solid variant textarea',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid content',
  },
};

export const CssCheck: Story = {
  args: {
    defaultValue: 'Styled textarea',
    variant: 'outline',
  },
  play: async ({ canvas }) => {
    const field = canvas.getByDisplayValue('Styled textarea');
    // outline variant uses rounded: 'lg' on the root wrapper
    await expect(getComputedStyle(field.parentElement!).borderRadius).not.toBe(
      '0px',
    );
  },
};
