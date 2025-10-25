'use client';

import { styled } from '@particles/styled-system/jsx';
import { indicator } from '@particles/styled-system/recipes';
import type { IndicatorVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface IndicatorProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  palette?: IndicatorVariantProps['palette'];
  size?: IndicatorVariantProps['size'];
}

export const Indicator = styled('span', indicator);
