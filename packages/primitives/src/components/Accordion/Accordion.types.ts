import type { ReactNode } from 'react';

export interface UseAccordionProps {
  /** Allow multiple items to be opened at once */
  allowMultiple?: boolean;
  /** Set the default opened items - for uncontrolled */
  defaultValue?: string | string[];
  /** Set the value for opened items - for controlled */
  value?: string | string[];
  /** Function to execute when an item change state - for controlled */
  onChange?(value: string | string[]): void;
}

export interface UseAccordionItemProps {
  value?: string;
  /** Disables the current item */
  isDisabled?: boolean;
}

export interface AccordionState {
  openPanes: string[];
}

export interface AccordionContextValue {
  state: AccordionState;
  dispatch: React.Dispatch<any>;
  value?: string | string[];
  onChange?(value: string | string[]): void;
}

export interface AccordionItemContextValue {
  getTriggerProps: any;
  getPanelProps: any;
}

export interface AccordionProps extends UseAccordionProps {
  children?: React.ReactNode;
}

export interface AccordionItemProps extends UseAccordionItemProps {
  children?: React.ReactNode;
}

export interface AccordionControlProps {
  children?: ReactNode;
}

export interface AccordionPanelProps {
  children?: ReactNode;
}
