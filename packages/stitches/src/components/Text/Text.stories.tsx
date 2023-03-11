import React from 'react';
import { Heading } from '../Heading';
import { Stack } from '../Stack';
import { Text } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Whatcha gonna do when Hulkamania runs wild on you! Rest...in...peace.
  </Text>
);

export const KitchenSink: ComponentStory<typeof Text> = () => (
  <Stack>
    <Heading variant="display">To be the man, you gotta beat the man</Heading>
    <Heading variant="title">Who&apos;s next?!</Heading>
    <Heading variant="subtitle">
      Will never, ever, be the same, again! Have a nice day! Hey yo.
    </Heading>
    <Text variant="lead">
      Whatcha gonna do when Hulkamania runs wild on you! Have a nice day! If you
      smell, what The Rock is cooking! Give me a hell yeah!
    </Text>
    <Text>
      Ooooh yeah! Whatcha gonna do when Hulkamania runs wild on you! Have a nice
      day! If you smell, what The Rock is cooking! Give me a hell yeah!
    </Text>
  </Stack>
);
