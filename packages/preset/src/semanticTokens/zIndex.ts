import { defineSemanticTokens } from '@pandacss/dev';

export const zIndex = defineSemanticTokens.zIndex({
  base: { value: '0' },
  dropdown: { value: '10' },
  sticky: { value: '20' },
  fixed: { value: '30' },
  overlay: { value: '40' },
  modal: { value: '50' },
  popover: { value: '60' },
  skipLink: { value: '70' },
  toast: { value: '80' },
  alert: { value: '90' },
});
