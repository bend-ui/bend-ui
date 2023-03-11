import { Template } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Template,
} as ComponentMeta<typeof Template>;

type Story = ComponentStory<typeof Template>;

export const Base: Story = (args) => (
  <Template {...args}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iusto
      quidem! Aut, sunt. Deserunt hic facilis sed earum atque quidem aliquam et,
      voluptates iste. Repellat quaerat quis facilis molestias dolore?
    </p>
  </Template>
);
