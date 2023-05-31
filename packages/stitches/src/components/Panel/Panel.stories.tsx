import { Panel } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Panel',
  component: Panel,
} as Meta<typeof Panel>;

export const Base: StoryObj<typeof Panel> = {
  render: (args) => (
    <Panel {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        suscipit esse accusamus eaque eligendi vel recusandae quam quaerat,
        molestias exercitationem et dignissimos amet nemo praesentium delectus
        voluptate veniam placeat nulla.
      </p>
    </Panel>
  ),
};
