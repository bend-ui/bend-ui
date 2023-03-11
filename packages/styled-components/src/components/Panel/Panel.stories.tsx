import { Panel } from './Panel';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Panel,
  title: 'Components/Panel',
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis ipsam
    quae sapiente, fugit maiores molestiae itaque alias? Natus dolore pariatur
    quisquam quidem vitae nostrum consectetur itaque corrupti amet accusantium.
  </Panel>
);

export const Primary = Template.bind({});
Primary.args = {};
