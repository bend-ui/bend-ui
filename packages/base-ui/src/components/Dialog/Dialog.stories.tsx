import { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { BellIcon, PlusIcon } from 'lucide-react';
import { Stack } from '@bend-ui/styled-system/jsx';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger>View notifications</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Popup>
            <Dialog.Title>Notifications</Dialog.Title>
            <Dialog.Description>
              You are all caught up. Good job!
            </Dialog.Description>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Popup>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
  args: {},
};

export const ButtonTriggers: Story = {
  render: (args) => (
    <Stack direction="row" gap="3">
      <Dialog.Root {...args}>
        <Dialog.Trigger icon={<BellIcon />} variant="outline">
          Alerts
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Popup>
              <Dialog.Title>Alerts</Dialog.Title>
              <Dialog.Description>
                There are no unresolved operational alerts.
              </Dialog.Description>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root {...args}>
        <Dialog.Trigger icon={<PlusIcon />} size="sm">
          New appointment
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Popup>
              <Dialog.Title>New appointment</Dialog.Title>
              <Dialog.Description>
                Create a text-triggered dialog from a styled button.
              </Dialog.Description>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>
    </Stack>
  ),
  args: {},
};
