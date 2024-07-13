import { defineSlotRecipe } from '@pandacss/dev';

export const tabsRecipe = defineSlotRecipe({
  description: '',
  className: 'Tabs',
  slots: ['root', 'tablist', 'tab', 'pane', 'indicator'],
  base: {
    tablist: {
      display: 'flex',
      borderBottom: 'divider',
    },
    tab: {
      position: 'relative',
      padding: 'md',
      _hover: {
        backgroundColor: 'shark.800',
      },
      _selected: {
        _after: {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '3px',
          backgroundColor: 'primary',
        },
      },
    },
    pane: {
      pt: 'lg',
    },
  },
});
