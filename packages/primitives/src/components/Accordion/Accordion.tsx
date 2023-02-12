import { createComponent } from '../../utils';
import { useAccordion, useAccordionItem } from './useAccordion';

export interface AccordionProps {
  children?: React.ReactNode;
}

const Root = (props: AccordionProps) => {
  const { children, ...rest } = props;
  const { ...accordionProps } = useAccordion();
  return (
    <div {...accordionProps} {...rest}>
      {children}
    </div>
  );
};

export interface AccordionItemProps {
  children?: React.ReactNode;
}

const Item = (props: AccordionItemProps) => {
  const { children } = props;
  const { getTriggerProps, getPanelProps } = useAccordionItem({});
  return (
    <>
      <h3>
        <button {...getTriggerProps()}>Is there a free trial available?</button>
      </h3>
      <div {...getPanelProps()}>{children}</div>
    </>
  );
};

export default createComponent(Root, { Root, Item }, 'Accordion');
