import { forwardRef } from '@particles/primitives';
import { useEffect, useRef } from 'react';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../styles';

const useAccordion = (props) => {
  const { ref } = props;

  useEffect(() => {
    console.log(ref);
    // if (!ref.current) return;

    // const items = ref.current.querySelectorAll('details');
    // console.log(items);
  }, [ref]);
};

export type AccordionProps = DefaultComponentProps;

const Accordion = forwardRef<AccordionProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;

  const innerRef = useRef<HTMLDivElement>();

  useAccordion({ innerRef });

  return (
    <Box ref={innerRef} {...rest}>
      {children}
    </Box>
  );
});

export type AccordionItemProps = DefaultComponentProps;

const Item = forwardRef<AccordionItemProps, 'details'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box as="details" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Accordion, { Item });
