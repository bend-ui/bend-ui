import { createStyles } from '../../styles';

export interface AlertStylesParams {
  variant?: 'solid' | 'outline' | 'ghost';
  palette?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
}
export default createStyles(({ palette }: AlertStylesParams) => ({
  alert: {
    padding: '$lg',
    borderRadius: '$md',
    variants: {
      variant: {
        solid: {
          backgroundColor: `$${palette}`,
        },
        outline: {
          color: `$${palette}`,
          border: `1px solid $${palette}`,
        },
      },
    },
  },
}));
