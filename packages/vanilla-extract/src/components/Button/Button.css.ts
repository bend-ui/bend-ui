import { buttonStyles } from '@particles/primitives';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme';

export const button = recipe({
  base: {
    ...buttonStyles.root,
    fontWeight: vars.fontWeights.medium,
  },
  variants: {
    palette: {
      primary: {
        color: vars.colors['on-primary'],
        backgroundColor: vars.colors.primary,
      },
      danger: {
        color: vars.colors['on-danger'],
        backgroundColor: vars.colors.danger,
      },
      warning: {
        color: vars.colors['on-warning'],
        backgroundColor: vars.colors.warning,
      },
    },
    size: {
      sm: {
        fontSize: vars.fontSizes.sm,
        paddingInline: vars.space.sm,
        paddingBlock: vars.space.xs,
      },
      md: {
        fontSize: vars.fontSizes.base,
        paddingInline: vars.space.md,
        paddingBlock: vars.space.sm,
      },
      lg: {
        fontSize: vars.fontSizes.lg,
        paddingInline: vars.space.lg,
        paddingBlock: vars.space.md,
      },
    },
    isRounded: {
      false: { borderRadius: vars.radii.DEFAULT },
      true: { borderRadius: vars.radii.full },
    },
  },
});
