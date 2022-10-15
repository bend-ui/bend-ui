import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Usage: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button variant="outline">Button with tooltip</Button>
  </Tooltip>
);

Usage.args = {
  content: 'Tooltip',
};
