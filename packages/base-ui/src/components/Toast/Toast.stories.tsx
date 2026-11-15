import { useState } from 'react';
import { XIcon } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast, useToastManager } from './Toast';

// Toast itself renders one toast record, so the story composes the provider.
const meta: Meta = {
  title: 'Toast',
  component: Toast,
};

export default meta;

type Story = StoryObj;

function CreateToastButton() {
  const toastManager = useToastManager();
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        setCount((previous) => previous + 1);
        toastManager.add({
          title: `Toast ${count + 1} created`,
          description: 'This is a toast notification.',
        });
      }}
    >
      Create toast
    </button>
  );
}

function ToastList() {
  const { toasts } = useToastManager();
  return toasts.map((toast) => (
    <Toast key={toast.id} toast={toast}>
      <Toast.Title />
      <Toast.Description />
      <Toast.Close aria-label="Close">
        <XIcon aria-hidden="true" />
      </Toast.Close>
    </Toast>
  ));
}

export const Default: Story = {
  render: () => (
    <Toast.Provider>
      <CreateToastButton />
      <Toast.Portal>
        <Toast.Viewport>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  ),
};
