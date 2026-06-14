import { defineSlotRecipe } from '@pandacss/dev';

export const scrollArea = defineSlotRecipe({
  className: 'ScrollArea',
  slots: ['root', 'viewport', 'content', 'scrollbar', 'thumb', 'corner'],
  base: {
    root: {
      position: 'relative',
      overflow: 'hidden',
      width: 'full',
      height: 'full',
    },
    viewport: {
      width: 'full',
      height: 'full',
      minHeight: '0',
    },
    content: {
      minWidth: 'full',
    },
    scrollbar: {
      display: 'flex',
      userSelect: 'none',
      touchAction: 'none',
      padding: '1',
      backgroundColor: 'transparent',
      _vertical: {
        width: '3',
      },
      _horizontal: {
        height: '3',
        flexDirection: 'column',
      },
    },
    thumb: {
      flex: '1',
      backgroundColor: 'fill.strong',
      borderRadius: '999px',
    },
    corner: {
      backgroundColor: 'transparent',
    },
  },
});
