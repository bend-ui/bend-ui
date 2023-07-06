import { SplitLayout } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Layout/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SplitLayout>;

export const Base: StoryObj<typeof SplitLayout> = {};
