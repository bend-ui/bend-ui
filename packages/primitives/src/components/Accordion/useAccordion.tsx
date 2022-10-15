import { useDisclosure } from '../../hooks';

export interface UseAccordionProps {}

export const useAccordion = (props: UseAccordionProps) => {
  return {};
};

export interface UseAccordionItemProps {
  id?: string;
}

export const useAccordionItem = (props: UseAccordionItemProps) => {
  const { isOpen, toggle } = useDisclosure();

  const getTriggerProps = () => ({
    onClick: toggle,
    'aria-expanded': isOpen,
  });

  const getPanelProps = () => ({
    role: 'region',
    hidden: !isOpen,
  });

  return { getTriggerProps, getPanelProps };
};
