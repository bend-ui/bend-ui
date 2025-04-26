import { forwardRef } from 'react';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import type { ElementRef } from 'react';
import { XIcon } from 'lucide-react';

export type DismissButtonProps = ButtonProps;

export const DismissButton = forwardRef<
  ElementRef<typeof Button>,
  DismissButtonProps
>((props, ref) => (
  <Button ref={ref} aria-label="Dismiss" icon={<XIcon />} {...props} />
));

DismissButton.displayName = 'DismissButton';
