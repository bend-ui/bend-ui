import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';

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
