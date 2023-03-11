import { Button } from '../Button';
import { Tooltip } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button>Button</Button>
  </Tooltip>
);

Default.args = {
  label: "I'm a tooltip",
};
