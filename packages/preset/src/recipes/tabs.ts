import { defineRecipe } from '@pandacss/dev';
import { tabsParts } from '@particles/preset-base';

const parts = tabsParts;

export const tabsRecipe = defineRecipe({
  className: 'Tabs',
  base: parts({
    root: {
      gap: 'md',
    },
    list: {
      display: 'flex',
      borderBottom: 'divider',
    },
    trigger: {
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
    content: {
      pt: 'lg',
    },
  }),
});
