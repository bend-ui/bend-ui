import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  section: { selector: '& [data-part="section"]' },
});

export const cardRecipe = defineRecipe({
  className: 'Card',
  base: parts({
    root: { p: 'lg', rounded: '2xl', layerStyle: 'panel' },
    section: {
      mx: '-lg',
      _first: { mt: '-lg' },
      _last: { mb: '-lg' },
    },
  }),
  variants: {
    inheritPadding: {
      true: parts({
        section: {
          p: 'lg',
        },
      }),
    },
    withBorder: {
      true: parts({
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
      }),
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
