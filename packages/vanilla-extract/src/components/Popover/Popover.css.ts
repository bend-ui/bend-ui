import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme';

export const panel = recipe({
  base: {
    backgroundColor: vars.colors.surface,
    maxWidth: 400,
    padding: vars.space.md,
    borderRadius: vars.radii.DEFAULT,
  },
});
