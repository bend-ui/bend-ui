import { AlertDialog } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: AlertDialog } as Meta<typeof AlertDialog>;

export const Base: StoryObj<typeof AlertDialog> = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};
