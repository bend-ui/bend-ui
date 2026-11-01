import { defineTone } from '../../utils/define-tone';

export const danger = defineTone('danger', {
  scale: 'red',
  overrides: {
    fill: {
      DEFAULT: { value: '{colors.danger.700}' },
      hover: { value: '{colors.danger.800}' },
      active: { value: '{colors.danger.900}' },
      selected: { value: '{colors.danger.800}' },
    },
  },
});
