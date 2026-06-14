'use client';

import { styled } from '@bend-ui/styled-system/jsx';
import { formField } from '@bend-ui/styled-system/recipes';

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
