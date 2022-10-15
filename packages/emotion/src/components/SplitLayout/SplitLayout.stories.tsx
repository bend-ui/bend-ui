import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SplitLayout } from '.';

export default {
  title: 'Components/Layout/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SplitLayout>;

export const Base: ComponentStory<typeof SplitLayout> = (args) => (
  <SplitLayout {...args}></SplitLayout>
);
