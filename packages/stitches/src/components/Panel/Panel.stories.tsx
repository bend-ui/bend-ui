import { Panel } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

export const Base: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit
      esse accusamus eaque eligendi vel recusandae quam quaerat, molestias
      exercitationem et dignissimos amet nemo praesentium delectus voluptate
      veniam placeat nulla.
    </p>
  </Panel>
);
