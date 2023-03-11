import React from 'react';
import { Media } from '../../Media';
import { Avatar } from '../../Avatar';
import { Text } from '../../Text';
import { UnstyledButton } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button/UnstyledButton',
  component: UnstyledButton,
} as ComponentMeta<typeof UnstyledButton>;

export const Base: ComponentStory<typeof UnstyledButton> = (args) => (
  <UnstyledButton {...args}>
    <Media>
      <Media.Image>
        <Avatar src="https://randomuser.me/api/portraits/men/44.jpg" />
      </Media.Image>
      <Media.Content>
        <Text>Nazim Philip</Text>
        <Text>nazim@particles-ui.dev</Text>
      </Media.Content>
    </Media>
  </UnstyledButton>
);
