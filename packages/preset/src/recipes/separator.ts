import { defineRecipe } from '@pandacss/dev';
export const separatorRecipe = defineRecipe({
  className: 'Separator',
  base: { flexShrink: 0, backgroundColor: 'stroke.focus' },
  variants: {
    orientation: {
      horizontal: { height: '1px', width: 'full' },
      vertical: { width: '1px', alignSelf: 'stretch' },
    },
  },
  defaultVariants: { orientation: 'horizontal' },
});
