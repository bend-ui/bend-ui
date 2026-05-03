import { Conditions } from '@pandacss/types';

export const conditions: Conditions = {
  light: '[data-color-mode=light] &, .light &',
  dark: '[data-color-mode=dark] &, .dark &',
  flat: '[data-tone="flat"] &',
  soft: '[data-tone="soft"] &',
  glass: '[data-tone="glass"] &',
  closed: '&:is([data-state=closed], [data-closed])',
  open: '&:is([open], [data-state=open], [data-open])',
  selected: '&:is([data-selected], [data-state=selected])',
  active: '&:is(:active, [data-active], [data-state=active])',
  inactive: '&:is([data-inactive], [data-state=inactive])',
  checked: '&:is([data-checked], [data-state=checked])',
  unchecked: '&:is([data-unchecked], [data-state=unchecked])',
  notDisabled: '&:not(:is([data-disabled], [aria-disabled], :disabled))',
  disabled: '&:is([data-disabled], [aria-disabled], :disabled)',
  focusVisible: '&:is(:focus-visible, [data-focus-visible])',
};
