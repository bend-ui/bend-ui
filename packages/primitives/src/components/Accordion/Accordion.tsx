import { useAccordion, useAccordionItem } from './useAccordion';

export interface AccordionProps {
  children?: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const { children, ...rest } = props;
  const {} = useAccordion({});
  return <div {...rest}>{children}</div>;
};

export interface AccordionItemProps {
  children?: React.ReactNode;
}

const AccordionItem = (props: AccordionItemProps) => {
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

export default Object.assign(Accordion, { Item: AccordionItem });
