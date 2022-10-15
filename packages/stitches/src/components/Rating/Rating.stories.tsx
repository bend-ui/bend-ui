import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Rating } from ".";

export default {
  title: 'Components/Rating',
  component: Rating
} as ComponentMeta<typeof Rating>

export const Default: ComponentStory<typeof Rating> = (args) => (<Rating {...args} />)
