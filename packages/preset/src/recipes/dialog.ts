import { defineSlotRecipe } from '@pandacss/dev';

export const dialogRecipe = defineSlotRecipe({
  slots: ['positioner', 'content', 'title', 'description', 'closeTrigger'],
  className: 'Dialog',
  base: {
    positioner: {},
    content: {
      layerStyle: 'surface.overlay',
      borderRadius: 'md',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'subtitle',
    },
    closeTrigger: {
      position: 'absolute',
      top: 'sm',
      right: 'sm',
    },
  },
  variants: {
    size: {
      sm: {
        content: { minWidth: 'sm', padding: 2 },
        title: { textStyle: 'title' },
        description: { textStyle: 'body' },
      },
      md: {
        content: { minWidth: 'md', padding: 4 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      },
      lg: {
        content: { minWidth: 'lg', padding: 6 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
