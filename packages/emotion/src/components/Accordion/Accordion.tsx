import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Accordion.styles';
import { AccordionItem } from './AccordionItem';
import type { DefaultComponentProps } from '../../types';

export type AccordionProps = DefaultComponentProps;

const Accordion = forwardRef<AccordionProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = useDefaultProps('Accordion', props);
  const { styles } = useStyles({}, { name: 'Accordion' });
  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {/* <details>
        <summary>What is HTML?</summary>
        <p>
          HTML (HyperText Markup Language) is the most basic building block of
          the Web. It defines the meaning and structure of web content.
        </p>
      </details> */}

      {children}
    </Box>
  );
});

Accordion.displayName = 'Accordion';

export default createComponent(Accordion, { Item: AccordionItem });
