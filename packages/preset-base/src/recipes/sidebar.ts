import { defineSlotRecipe } from '@pandacss/dev';

export const sidebarRecipe = defineSlotRecipe({
  className: 'Sidebar',
  slots: ['root', 'header', 'content', 'footer', 'item', 'label', 'link'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    header: {
      flexShrink: '0',
      padding: 'md',
    },
    content: {
      flex: '1',
      padding: 'md',
    },
    footer: {
      flexShrink: '0',
      padding: 'md',
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2',
      borderRadius: 'md',
      _hover: {
        backgroundColor: 'fill.hover',
      },
      '&:has(a[aria-current="page"])': {
        backgroundColor: 'fill.hover',
      },
    },
    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    link: {
      flex: '1',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2',
      padding: '2',
      '& > svg': {
        width: '4',
        height: '4',
      },
    },
  },
});
