import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppShell } from '.';

export default {
  title: 'Components/Layout/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppShell>;

export const Base: ComponentStory<typeof AppShell> = (args) => (
  <AppShell {...args}>
    <AppShell.NotificationBar>Notification Bar</AppShell.NotificationBar>
    <AppShell.Header>Header</AppShell.Header>
    <AppShell.Sidebar>Sidebar</AppShell.Sidebar>
    <AppShell.Main>Main</AppShell.Main>
    <AppShell.Footer>Footer</AppShell.Footer>
  </AppShell>
);

export const Alt = Base.bind({});

Alt.args = {
  layout: 'alt',
};

export const Simple: ComponentStory<typeof AppShell> = (args) => (
  <AppShell {...args}>
    <AppShell.Header>Header</AppShell.Header>
    <AppShell.Main>Main</AppShell.Main>
  </AppShell>
);
