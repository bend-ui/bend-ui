'use client';

import { createButton, type ButtonProps } from '@bend-ui/core';
import { XIcon } from 'lucide-react';

export type { ButtonProps };

export const Button = createButton();

export type DismissButtonProps = ButtonProps;

export const DismissButton = (props: DismissButtonProps) => (
  <Button aria-label="Dismiss" icon={<XIcon />} {...props} />
);

DismissButton.displayName = 'DismissButton';
