import { Button } from '../Button';
import { ToastProvider, useToast } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ToastProvider',
  component: ToastProvider,
} as Meta<typeof ToastProvider>;

export const Usage: StoryFn<typeof ToastProvider> = () => {
  const { addToast, dismissToast } = useToast();

  return (
    <>
      <Button
        onClick={() =>
          addToast({
            title: 'Title',
            content: 'Content',
          })
        }
      >
        Add toast
      </Button>
      <Button onClick={() => dismissToast('hello')}>Remove toast</Button>
    </>
  );
};
