import { SplitLayout } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SplitLayout>;

export const Base: StoryObj<typeof SplitLayout> = {};
