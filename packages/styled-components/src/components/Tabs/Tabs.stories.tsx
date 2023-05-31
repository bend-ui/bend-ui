import React from 'react';
import { Tabs } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

export const Base: StoryObj<typeof Tabs> = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">Tab 1</Tabs.Panel>
      <Tabs.Panel value="tab2">Tab 2</Tabs.Panel>
    </Tabs>
  ),

  args: {
    defaultTab: 'tab1',
  },
};

export const Pill = {
  render: Base,

  args: {
    variant: 'pill',
  },
};

export const Tab = {
  render: Base,

  args: {
    variant: 'tab',
  },
};

export const Fitted = {
  render: Base,

  args: {
    isFitted: true,
  },
};
