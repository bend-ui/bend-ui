'use client';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { XIcon } from 'lucide-react';

export type DismissButtonProps = ButtonProps;

export const DismissButton = (props: DismissButtonProps) => (
  <Button aria-label="Dismiss" icon={<XIcon />} {...props} />
);

DismissButton.displayName = 'DismissButton';
