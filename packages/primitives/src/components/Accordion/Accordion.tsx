import { createComponent, forwardRef } from '../../utils';
import { useId } from '../../hooks';
import { useAccordion, useAccordionItem } from './useAccordion';
import {
  AccordionItemProvider,
  AccordionProvider,
  useAccordionItemContext,
} from './Accordion.context';
import type {
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from './Accordion.types';

const Root = forwardRef<AccordionProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    allowMultiple = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const context = useAccordion({
    allowMultiple,
    defaultValue,
    value,
    onChange,
  });

  return (
    <AccordionProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </AccordionProvider>
  );
});

const Item = forwardRef<AccordionItemProps, 'div'>((props, ref) => {
  const { children, value, isDisabled, ...rest } = props;

  const context = useAccordionItem({
    value,
    isDisabled,
  });

  return (
    <AccordionItemProvider value={context}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </AccordionItemProvider>
  );
});

const Control = forwardRef<AccordionControlProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  const { getTriggerProps } = useAccordionItemContext();
  return (
    <h3>
      <button ref={ref} {...getTriggerProps(rest)}>
        {children}
      </button>
    </h3>
  );
});

const Panel = forwardRef<AccordionPanelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { getPanelProps } = useAccordionItemContext();

  return (
    <div ref={ref} {...getPanelProps(rest)}>
      {children}
    </div>
  );
});

export default createComponent(
  Root,
  { Root, Item, Control, Panel },
  'Accordion'
);
