import { defineSlotRecipe } from '@pandacss/dev';

export const accordionRecipe = defineSlotRecipe({
  slots: ['root', 'item', 'trigger', 'indicator', 'content'],
  className: 'Accordion',
  base: {
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
  },
  variants: {
    attached: {
      true: {
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
      },
    },
  },
});
