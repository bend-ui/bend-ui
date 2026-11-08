import { createElement, createRef, type ComponentProps } from 'react';
import { Button, IconButton } from '@bend-ui/base-ui';
import {
  button,
  text,
  type ButtonVariantProps,
} from '../styled-system/recipes';
import type { RecipeButtonProps } from './recipe-button';

const generated: ButtonVariantProps = { variant: 'editorial', size: 'jumbo' };
const local: RecipeButtonProps = {
  ...generated,
  disabled: true,
  'aria-label': 'Local action',
};
const published: ComponentProps<typeof Button> = {
  variant: 'primary',
  size: 'lg',
};
const icon: ComponentProps<typeof IconButton> = {
  icon: createElement('span'),
  children: 'Open account',
  isDisabled: true,
  isLoading: true,
  size: 'lg',
  variant: 'primary',
  render: createElement('span'),
  nativeButton: false,
  ref: createRef<HTMLElement>(),
};
const unsupportedVariant: ComponentProps<typeof Button> = {
  // @ts-expect-error The packed declaration does not grow consumer-defined variants.
  variant: 'editorial',
};
// @ts-expect-error The packed declaration does not grow consumer-defined sizes.
const unsupportedSize: ComponentProps<typeof Button> = { size: 'jumbo' };
// @ts-expect-error Local codegen must still reject unknown variants.
button({ variant: 'not-a-variant' });
// @ts-expect-error Local codegen must still reject unknown sizes.
button({ size: 'not-a-size' });
// @ts-expect-error Compound recipe props cannot use responsive conditions.
button({ size: { base: 'lg', md: 'jumbo' } });
text({ variant: 'billboard' });
text({ variant: 'body' });
void [local, published, icon, unsupportedVariant, unsupportedSize];
