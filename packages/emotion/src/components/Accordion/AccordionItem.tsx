import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../types';

export type AccordionItemProps = DefaultComponentProps;

export const AccordionItem = forwardRef<AccordionItemProps, 'details'>(
  (props, ref) => {
    const { children, as = 'details', ...rest } = props;
    return (
      <Box as={as} ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
