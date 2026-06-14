'use client';

import { styled } from '@bend-ui/styled-system/jsx';
import { indicator } from '@bend-ui/styled-system/recipes';
import type { IndicatorVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface IndicatorProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  palette?: IndicatorVariantProps['palette'];
  size?: IndicatorVariantProps['size'];
}

export const Indicator = styled('span', indicator);
