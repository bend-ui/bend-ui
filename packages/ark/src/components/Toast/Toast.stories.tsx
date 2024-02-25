import { Button } from '@particles/react';
import { createToaster, Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';
import type { CreateToasterProps } from '@ark-ui/react';

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Base: Story = {
  render: () => {
    const [Toaster, toast] = createToaster({
      placement: 'top-end',
      render(toast) {
        return (
          <Toast.Root>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>Close</Toast.CloseTrigger>
          </Toast.Root>
        );
      },
    });

    return (
      <>
        <Button
          onClick={() =>
            toast.create({ title: 'Title', description: 'Description' })
          }
        >
          Add Toast
        </Button>
        <Toaster />
      </>
    );
  },
};

export const Placements: Story = {
  render: () => {
    const [Toaster, toast] = createToaster({
      placement: 'top-start',
      render(toast) {
        return (
          <Toast.Root>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>Close</Toast.CloseTrigger>
          </Toast.Root>
        );
      },
    });

    const placements: CreateToasterProps['placement'][] = [
      'top-start',
      'top',
      'top-end',
      'bottom-start',
      'bottom',
      'bottom-end',
    ];

    return (
      <>
        {placements.map((placement) => (
          <Button
            key={placement}
            onClick={() =>
              toast.create({
                title: 'Title',
                description: 'Description',
                placement,
                id: placement,
              })
            }
          >
            Add Toast {placement}
          </Button>
        ))}
        <Toaster />
      </>
    );
  },
};
