import { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { dialog } from '@particles/styled-system/recipes';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    size: {
      control: 'select',
      options: dialog.variantMap.size,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <div>Hello</div>,
    title: 'Dialog Title',
    description: 'Dialog Description',
    closeTrigger: 'Close',
  },
};
