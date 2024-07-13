import { forwardRef } from 'react';
import { LuX } from 'react-icons/lu';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import type { ElementRef } from 'react';

export type DismissButtonProps = ButtonProps;

export const DismissButton = forwardRef<
  ElementRef<typeof Button>,
  DismissButtonProps
>((props, ref) => (
  <Button ref={ref} aria-label="Dismiss" icon={<LuX />} {...props} />
));

DismissButton.displayName = 'DismissButton';
