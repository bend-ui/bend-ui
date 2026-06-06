import { defineSlotRecipe, defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineSlotRecipe({
  className: 'Card',
  slots: [
    'root',
    'header',
    'title',
    'description',
    'body',
    'footer',
    'section',
  ],
  base: {
    root: { p: 'lg', rounded: '2xl', layerStyle: 'panel' },
    header: { mb: 'md' },
    title: { fontSize: 'lg', fontWeight: 'bold' },
    description: { mt: 'xs', color: 'text.weak' },
    body: { mt: 'md' },
    footer: { mt: 'md' },
    section: {
      mx: '-lg',
      _first: { mt: '-lg' },
      _last: { mb: '-lg' },
    },
  },
  variants: {
    inheritPadding: {
      true: {
        section: {
          p: 'lg',
        },
      },
    },
    withBorder: {
      true: {
        section: {
          borderBottom: 'weak',
          _notFirst: {
            borderTop: 'weak',
          },
          _last: {
            borderBottom: 'none',
          },
          '& + &': {
            borderBottom: 'none',
          },
        },
      },
    },
  },
  defaultVariants: {
    inheritPadding: true,
    withBorder: false,
  },
});

export const cardSectionRecipe = defineRecipe({
  className: 'CardSection',
  base: {},
  variants: {
    inheritPadding: {
      true: {
        p: 'md',
      },
    },
    withBorder: {
      true: {
        _notFirst: {
          borderTop: 'weak',
        },
        _notLast: {
          borderBottom: 'weak',
        },
      },
    },
  },
  defaultVariants: {
    inheritPadding: true,
  },
});
