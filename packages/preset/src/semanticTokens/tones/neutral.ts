import { defineTone } from '../../utils/define-tone';

export const neutral = defineTone('neutral', {
  scale: 'gray',
  overrides: {
    fill: {
      DEFAULT: {
        value: '{colors.neutral.50}',
      },
      hover: {
        value: 'color-mix(in srgb, {colors.neutral.fill} 100%, black 10%)',
      },
      active: {
        value: '{colors.neutral.300}',
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
