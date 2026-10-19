import { defineConfig } from '@pandacss/dev';
import base from './panda.config';

export default defineConfig({
  ...base,
  theme: {
    ...base.theme,
    extend: {
      ...base.theme?.extend,
      recipes: {
        text: {
          variants: { variant: { billboard: { fontSize: '41px' } } },
        },
      },
      slotRecipes: {
        button: {
          jsx: ['RecipeButton'],
          base: { root: { outlineOffset: '7px' } },
          variants: {
            variant: {
              primary: { root: { backgroundColor: '#be123c' } },
              editorial: {
                root: { backgroundColor: '#0f766e', color: 'white' },
              },
            },
            size: {
              jumbo: {
                root: { minHeight: '72px' },
                label: { fontSize: '23px' },
              },
            },
          },
          compoundVariants: [
            {
              variant: 'primary',
              size: 'lg',
              css: { root: { outlineStyle: 'solid', outlineWidth: '6px' } },
            },
            {
              variant: 'editorial',
              size: 'jumbo',
              css: {
                root: { borderWidth: '5px' },
                label: { letterSpacing: '0.09em' },
              },
            },
          ],
        },
      },
    },
  },
});
