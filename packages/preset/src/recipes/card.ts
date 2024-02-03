import { defineSlotRecipe } from '@pandacss/dev';

export const cardRecipe = defineSlotRecipe({
  description: '',
  className: 'Card',
  slots: ['root', 'section', 'header', 'footer'],
  base: {
    root: {
      p: 'lg',
      rounded: '2xl',
      layerStyle: 'panel',
    },
    section: {
      mx: '-4',
      '&:first-child': {
        mt: '-4',
      },
      '&:last-child': {
        mb: '-4',
      },
    },
  },
  variants: {
    inheritPadding: {
      true: {
        section: {
          p: 'md',
        },
      },
    },
    withBorder: {
      true: {
        section: {
          color: 'amber.500',
          borderColor: 'primary',
          '&:not(:first-child)': {
            borderStyle: 'solid',
            borderTopWidth: 1,
          },
          '&:not(:last-child)': {
            borderStyle: 'solid',
            borderBottomWidth: 1,
          },
        },
      },
    },
  },
});
