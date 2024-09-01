import { defineSlotRecipe } from '@pandacss/dev';

export const accordionRecipe = defineSlotRecipe({
  className: 'Accordion',
  slots: ['root', 'item', 'trigger', 'indicator', 'content'],
  base: {
    item: {
      display: 'flex',
      flexDirection: 'column',
      border: 'base',
      borderTop: 'none',
      padding: 'base',
      _first: {
        border: 'base',
        roundedTop: 'base',
      },
      _last: {
        roundedBottom: 'base',
      },
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
    },
    content: {},
  },
});
