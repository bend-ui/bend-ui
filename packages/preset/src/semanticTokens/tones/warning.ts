import { defineTone } from '../../utils/define-tone';

export const warning = defineTone('warning', {
  scale: 'yellow',
  overrides: {
    text: {
      inverse: {
        value: '{colors.warning.950}',
      },
    },
  },
});
