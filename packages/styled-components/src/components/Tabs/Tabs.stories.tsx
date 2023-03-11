import React from 'react';
import { Tabs } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Base: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
      <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="tab1">Tab 1</Tabs.Panel>
    <Tabs.Panel value="tab2">Tab 2</Tabs.Panel>
  </Tabs>
);

Base.args = {
  defaultTab: 'tab1',
};

export const Pill = Base.bind({});

Pill.args = {
  variant: 'pill',
};

export const Tab = Base.bind({});

Tab.args = {
  variant: 'tab',
};

export const Fitted = Base.bind({});

Fitted.args = {
  isFitted: true,
};
