import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Progress } from ".";

export default {
  title: 'Components/Progress',
  component: Progress
} as ComponentMeta<typeof Progress>

export const Default: ComponentStory<typeof Progress> = (args) => (<Progress {...args} />)
