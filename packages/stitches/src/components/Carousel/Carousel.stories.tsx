import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Carousel } from "./";

export default {
  title: 'Components/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

export const Default: ComponentStory<typeof Carousel> = (args) => (<Carousel {...args} />)
