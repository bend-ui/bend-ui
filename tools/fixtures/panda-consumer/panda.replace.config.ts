import { defineConfig, defineSlotRecipe, defineRecipe } from '@pandacss/dev';
import base from './panda.config';

export default defineConfig({
  ...base,
  theme: {
    ...base.theme,
    recipes: {
      text: defineRecipe({
        className: 'Text',
        base: { color: '#164e63' },
        variants: {
          variant: {
            body: { fontSize: '16px' },
            billboard: { fontSize: '43px' },
          },
        },
      }),
    },
    slotRecipes: {
      button: defineSlotRecipe({
        className: 'Button',
        jsx: ['RecipeButton'],
        slots: ['root', 'label', 'icon', 'spinner'],
        base: {
          root: {
            display: 'inline-flex',
            borderRadius: '3px',
            borderStyle: 'solid',
            borderColor: 'currentColor',
            outlineOffset: '13px',
          },
          label: { textDecoration: 'underline' },
        },
        variants: {
          variant: {
            primary: { root: { backgroundColor: '#1e40af', color: 'white' } },
            secondary: { root: { backgroundColor: '#e2e8f0' } },
            editorial: { root: { backgroundColor: '#a16207', color: 'white' } },
          },
          size: {
            md: { root: { minHeight: '40px' } },
            lg: { root: { minHeight: '48px' } },
            jumbo: { root: { minHeight: '80px' }, label: { fontSize: '29px' } },
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
              root: { borderWidth: '9px' },
              label: { letterSpacing: '0.13em' },
            },
          },
        ],
        // Match the published runtime's defaults for drop-in behavior.
        defaultVariants: { variant: 'secondary', size: 'md' },
      }),
    },
  },
});
