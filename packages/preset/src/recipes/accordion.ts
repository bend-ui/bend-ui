import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  item: { selector: '& [data-part="item"]' },
  trigger: { selector: '& [data-part="item-trigger"]' },
  indicator: { selector: '& [data-part="item-indicator"]' },
  content: { selector: '& [data-part="item-content"]' },
});

export const accordionRecipe = defineRecipe({
  className: 'Accordion',
  base: parts({
    root: {
      gap: 'sm',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      border: 'base',
      padding: 'base',
      rounded: 'base',
    },
    trigger: {
      display: 'flex',
      flex: '1 1 100%',
      width: 'full',
      placeItems: 'center',
    },
    indicator: {
      flex: '0 0 auto',
      display: 'flex',
      marginLeft: 'auto',
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
      _open: {
        transform: 'rotate(-180deg)',
      },
    },
    content: {
      transitionProperty: 'padding-bottom',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      _open: {
        animation: 'collapse-in',
      },
      _closed: {
        animation: 'collapse-out',
      },
    },
  }),
  variants: {
    attached: {
      true: parts({
        root: {
          gap: '0',
        },
        item: {
          borderTop: 'none',
          borderRadius: '0',
          _first: {
            borderTop: 'base',
            roundedTop: 'base',
          },
          _last: {
            roundedBottom: 'base',
          },
        },
      }),
    },
  },
});
