import { defineSlotRecipe } from '@pandacss/dev';
import { tabsParts } from '@bend-ui/preset-base';

const parts = tabsParts;

export const tabsRecipe = defineSlotRecipe({
  className: 'Tabs',
  slots: parts,
  base: {
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
      color: 'text',
      _hover: {
        backgroundColor: 'bg.page',
      },
      _focusVisible: { layerStyle: 'focus', outlineColor: 'text' },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
      _selected: {
        _after: {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '3px',
          backgroundColor: 'currentColor',
        },
      },
    },
    content: {
      pt: 'lg',
    },
  },
});
