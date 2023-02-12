import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Media, mediaStyles } from './';

export default {
  title: 'Layout/Media',
  component: Media,
} as ComponentMeta<typeof Media>;

type Story = ComponentStory<typeof Media>;

export const Base: Story = (args) => (
  <Media.Root {...args}>
    <Media.Image style={mediaStyles.image}>
      <img src="https://picsum.photos/100" alt="A nice view" />
    </Media.Image>
    <Media.Body style={mediaStyles.body}>
      Hey yo. Everybody's got a price for the Million Dollar Man! Who's next?!
      Ladies and gentleman, boys and girls, children of all ages, Degeneration
      X, proudly brings to you, your WWF TAG TEAM CHAMPIONS OF THE WORLD! The
      Road Dog Jesse James!
    </Media.Body>
  </Media.Root>
);
