import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Tabs } from '.';

export default { component: Tabs } as ComponentMeta<typeof Tabs>;

export const DefaultTabs: ComponentStoryObj<typeof Tabs> = {
  args: {},
};
