import * as React from 'react';
import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator';

const SeparatorRoot = SeparatorPrimitive;

const Component = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
      <a href="#">Support</a>

      <SeparatorRoot orientation="vertical" />

      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
};

export const Separator = Object.assign(Component, {
  Root: SeparatorRoot,
});
