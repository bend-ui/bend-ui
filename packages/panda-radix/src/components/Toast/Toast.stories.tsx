import { Button } from '../Button';
import { Toast, Toaster, useToast } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Toast,
  decorators: [
    (story) => (
      <>
        {story()}
        <Toaster />
      </>
    ),
  ],
} as Meta<typeof Toast>;

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
