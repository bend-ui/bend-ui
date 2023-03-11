import { Tabs } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
      <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
      <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
    </Tabs.List>
    <Tabs.Pane value="tab-1">
      <p>Tab 1</p>
    </Tabs.Pane>
    <Tabs.Pane value="tab-2">
      <p>Tab 2</p>
    </Tabs.Pane>
    <Tabs.Pane value="tab-3">
      <p>Tab 3</p>
    </Tabs.Pane>
  </Tabs>
);
