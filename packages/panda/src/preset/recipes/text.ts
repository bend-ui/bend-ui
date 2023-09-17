import { defineRecipe } from '@pandacss/dev';

export const textRecipe = defineRecipe({
  description: 'Text recipe',
  className: 'Text',
  base: {
    color: 'inherit',
  },
  variants: {
    variant: {
      headline: {
        textStyle: 'headline',
      },
      title: {
        textStyle: 'title',
      },
      body: {
        textStyle: 'body',
      },
      caption: {
        textStyle: 'caption',
      },
    },
  },
});
