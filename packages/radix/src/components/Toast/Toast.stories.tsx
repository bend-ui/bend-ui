import { Button } from '@particles/react';
import { Toast, ToastProvider } from './Toast';
import { useToast } from './useToast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [
    (story) => (
      <>
        {story()}
        <ToastProvider />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Base: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};
