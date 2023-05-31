import { Text } from '../Text';
import { Accordion } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item>
        <summary>Item 1</summary>
        <Text as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          molestiae ex eligendi totam officiis fuga debitis ullam cumque,
          consectetur corporis, mollitia, temporibus eius dolore praesentium
          numquam explicabo. Fugiat, sit.
        </Text>
      </Accordion.Item>
      <Accordion.Item>
        <summary>Item 2</summary>
        <Text as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          molestiae ex eligendi totam officiis fuga debitis ullam cumque,
          consectetur corporis, mollitia, temporibus eius dolore praesentium
          numquam explicabo. Fugiat, sit.
        </Text>
      </Accordion.Item>
      <Accordion.Item>
        <summary>Item 3</summary>
        <Text as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          molestiae ex eligendi totam officiis fuga debitis ullam cumque,
          consectetur corporis, mollitia, temporibus eius dolore praesentium
          numquam explicabo. Fugiat, sit.
        </Text>
      </Accordion.Item>
    </Accordion>
  ),
};
