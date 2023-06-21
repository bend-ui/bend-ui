import { useReducer } from 'react';
import { useId } from '../../hooks';
import { useAccordionContext } from './Accordion.context';
import type {
  AccordionState,
  UseAccordionItemProps,
  UseAccordionProps,
} from './Accordion.types';

type Action =
  | { type: 'OPEN_ITEM'; paneId: string }
  | { type: 'CLOSE_ITEM'; paneId: string }
  | { type: 'TOGGLE_ITEM'; paneId: string }
  | { type: 'CLOSE_ALL' };

export const useAccordion = (props: UseAccordionProps) => {
  const { allowMultiple, defaultValue, value, onChange } = props;

  const accordionReducer = (state: AccordionState, action: Action) => {
    switch (action.type) {
      case 'OPEN_ITEM':
        if (allowMultiple) {
          return {
            openPanes: [...state.openPanes, action.paneId],
          };
        }
        return {
          openPanes: [action.paneId],
        };
      case 'CLOSE_ITEM':
        return {
          openPanes: state.openPanes.filter((index) => index !== action.paneId),
        };
      case 'TOGGLE_ITEM':
        if (allowMultiple) {
          return {
            openPanes: state.openPanes.includes(action.paneId)
              ? state.openPanes.filter((index) => index !== action.paneId)
              : [...state.openPanes, action.paneId],
          };
        }
        return {
          openPanes: state.openPanes.includes(action.paneId)
            ? state.openPanes.filter((index) => index !== action.paneId)
            : [action.paneId],
        };
      case 'CLOSE_ALL':
        return {
          openPanes: [],
        };
      default:
        return state;
    }
  };

  const initialState = {
    openPanes: Array.isArray(defaultValue)
      ? defaultValue
      : [defaultValue] || [],
  };

  const [state, dispatch] = useReducer(accordionReducer, initialState);

  return {
    state,
    dispatch,
    value: Array.isArray(value) ? value : [value],
    onChange,
  };
};

export const useAccordionItem = (props: UseAccordionItemProps) => {
  const { value: valueProp, isDisabled } = props;
  const { state, dispatch, value, onChange } = useAccordionContext();

  const controlled = onChange !== undefined && value !== undefined;

  const paneId = useId(valueProp);

  const isOpen = controlled
    ? value.includes(paneId)
    : state.openPanes.includes(paneId);

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    controlled ? onChange(paneId) : dispatch({ type: 'TOGGLE_ITEM', paneId });
  };

  const getTriggerProps = (props) => ({
    ...props,
    onClick: handleClick,
    'data-state': isOpen ? 'open' : 'closed',
    'aria-expanded': isOpen,
    'aria-controls': paneId,
    'aria-disabled': isDisabled,
    id: `accordion-${paneId}`,
  });

  const getPanelProps = (props) => ({
    ...props,
    role: 'region',
    hidden: !isOpen,
    id: paneId,
    'aria-labelledby': `accordion-${paneId}`,
    'data-state': isOpen ? 'open' : 'closed',
  });

  return { isOpen, getTriggerProps, getPanelProps };
};
