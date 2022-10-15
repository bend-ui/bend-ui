import { createStyles, textStyles } from '../../styles';

export default createStyles(() => ({
  root: {
    borderRadius: '$xl',
    padding: '$md',
    variants: {
      variant: {
        solid: {
          backgroundColor: '$surface',
          border: '1px solid $outline',
          boxShadow: '$md',
        },
        outline: {
          border: '1px solid $outline',
        },
        subtle: {
          backgroundColor: '$bg-subtle',
        },
      },
    },
  },
  header: {
    ...textStyles.title,
    borderBottom: '1px solid $outline',
  },
  footer: {
    borderTop: '1px solid $outline',
  },
}));
