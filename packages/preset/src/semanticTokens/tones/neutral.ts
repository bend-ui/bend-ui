import { defineTone } from '../../utils/define-tone';

export const neutral = defineTone('neutral', {
  scale: 'gray',
  overrides: {
    fill: {
      DEFAULT: {
        value: '{colors.neutral.200}',
      },
      hover: {
        value: '{colors.neutral.300}',
      },
      active: {
        value: '{colors.neutral.400}',
      },
      disabled: {
        value: '{colors.neutral.400}',
      },
    },
    stroke: {
      DEFAULT: {
        value: '{colors.neutral.300}',
      },
    },
  },
});
