import { Stack } from '@particles/styled-system/jsx';
import { forwardRef } from 'react';
import type { StackProps } from '@particles/styled-system/jsx';
import type { ReactNode } from 'react';

export interface ButtonGroupProps extends StackProps {
  children?: ReactNode;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const { children, direction = 'horizontal', ...rest } = props;
    return (
      <Stack ref={ref} direction={direction} role="group" {...rest}>
        {children}
      </Stack>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
