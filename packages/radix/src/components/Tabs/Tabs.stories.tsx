import { Tabs } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="doc">Documentation</Tabs.Tab>
        <Tabs.Tab value="props">Props</Tabs.Tab>
      </Tabs.List>
      <Tabs.Pane value="doc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt
        dolores labore eveniet repellendus vitae quaerat nam pariatur corporis
        ratione debitis a similique exercitationem, sed quos inventore
        repudiandae quas nobis?
      </Tabs.Pane>
      <Tabs.Pane value="props">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum
        amet asperiores dolores illo neque quos, voluptatem, tenetur accusantium
        dolorum veniam, enim accusamus porro atque optio quod. Odio, reiciendis
        est.
      </Tabs.Pane>
    </Tabs>
  ),
  args: {
    defaultValue: 'doc',
  },
};
