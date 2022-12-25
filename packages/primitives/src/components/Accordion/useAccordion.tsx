import { useReducer } from 'react';
import { useDisclosure } from '../../hooks';

export interface UseAccordionProps {}

type Action =
  | { type: 'OPEN_ACCORDION'; paneId: string }
  | { type: 'CLOSE_ACCORDION'; paneId: string }
  | { type: 'TOGGLE_ACCORDION' };

const accordionReducer = (state, action: Action) => {
  switch (action.type) {
    case 'OPEN_ACCORDION':
      break;
    case 'CLOSE_ACCORDION':
      break;
    default:
      break;
  }
};

export const useAccordion = (props: UseAccordionProps) => {
  const [state, dispatch] = useReducer(accordionReducer, null);
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
