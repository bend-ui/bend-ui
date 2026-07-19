import * as React from 'react';
import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';
import { withRecipe } from '@bend-ui/core';
import { separator } from '@bend-ui/styled-system/recipes';

const SeparatorRoot = withRecipe<SeparatorPrimitive.Props>(
  SeparatorPrimitive,
  separator,
  'root',
);

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
