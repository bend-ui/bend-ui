import { defineTone } from '../../utils/define-tone';

export const primary = defineTone('primary', {
  scale: 'blue',
  overrides: {
    fill: {
      DEFAULT: { value: '{colors.primary.600}' },
      hover: { value: '{colors.primary.700}' },
      active: { value: '{colors.primary.800}' },
      selected: { value: '{colors.primary.700}' },
    },
  },
});
