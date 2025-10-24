'use client';

import { styled } from '@particles/styled-system/jsx';
import { formField } from '@particles/styled-system/recipes';

const Root = styled('div', formField);

const Label = styled('label', {});

const Description = styled('div', {});

const Error = styled('div', {});

export const FormField = Object.assign(Root, {
  Root,
  Label,
  Description,
  Error,
});
