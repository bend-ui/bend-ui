import { definePattern } from '@pandacss/dev';

export const level = definePattern({
  description: 'The level styles',
  transform(props) {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...props,
    };
  },
});
