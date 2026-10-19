import type { ComponentProps } from 'react';
import { Button } from '@bend-ui/base-ui';
import { css } from '../styled-system/css';
import { token } from '../styled-system/tokens';

const button: ComponentProps<typeof Button> = {
  size: 'lg',
  variant: 'primary',
};
// @ts-expect-error Published component props must reject unknown variants.
const invalid: ComponentProps<typeof Button> = { variant: 'not-a-variant' };
const brand: string = token('colors.consumer');
// @ts-expect-error Generated token types must reject unknown tokens.
token('colors.not-a-token');
css({ color: 'consumer', borderRadius: 'md' });
void [button, invalid, brand];
