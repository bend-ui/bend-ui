import { useState } from 'react';
import { Tabs } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

export const Usage: StoryObj<typeof Tabs> = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState<string | null>('profile');
    return (
      <Tabs {...args} activeTab={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="profile">Profile</Tabs.Tab>
          <Tabs.Tab value="password">Password</Tabs.Tab>
          <Tabs.Tab value="team">Team</Tabs.Tab>
        </Tabs.List>
        <Tabs.Pane value="profile">Profile</Tabs.Pane>
        <Tabs.Pane value="password">Password</Tabs.Pane>
        <Tabs.Pane value="team">Team</Tabs.Pane>
      </Tabs>
    );
  },
};
