import { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'AlertDialog',
  component: AlertDialog,
  tags: ['wip'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog.Root {...args}>
      <AlertDialog.Trigger>Discard draft</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Discard draft?</AlertDialog.Title>
          <AlertDialog.Description>
            You can't undo this action.
          </AlertDialog.Description>
          <div>
            <AlertDialog.Close>Cancel</AlertDialog.Close>
            <AlertDialog.Close>Discard</AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
  args: {},
};
