import React from 'react';
import { Meta } from '@storybook/react';
import { mediaStyles } from './Media.styles';

export default {
  title: 'Layout/Media',
} as Meta;

export const Base = () => {
  return (
    <div style={mediaStyles.root}>
      <div style={mediaStyles.image}>
        <img src="https://picsum.photos/100" alt="A nice view" />
      </div>
      <div style={mediaStyles.body}>
        Hey yo. Everybody's got a price for the Million Dollar Man! Who's next?!
        Ladies and gentleman, boys and girls, children of all ages, Degeneration
        X, proudly brings to you, your WWF TAG TEAM CHAMPIONS OF THE WORLD! The
        Road Dog Jesse James!
      </div>
      <div style={mediaStyles.footer}>
        That’s the bottom line because Stone Cold said so!
      </div>
    </div>
  );
};
