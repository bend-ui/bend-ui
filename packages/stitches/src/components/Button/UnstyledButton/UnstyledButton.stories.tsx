import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Media } from '../../Media';
import { Avatar } from '../../Avatar';
import { Text } from '../../Text';
import { UnstyledButton } from '.';

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
