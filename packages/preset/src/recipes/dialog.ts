import { defineSlotRecipe } from '@pandacss/dev';

export const dialogRecipe = defineSlotRecipe({
  slots: ['positioner', 'content', 'title', 'description', 'closeTrigger'],
  className: 'Dialog',
  base: {
    positioner: {},
    content: {
      layerStyle: 'surface.overlay',
      borderRadius: 'md',
      maxWidth: 'calc(100vw - 2rem)',
      maxHeight: 'calc(100dvh - 2rem)',
      overflowY: 'auto',
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
        content: { width: 'sm', padding: 2 },
        title: { textStyle: 'title' },
        description: { textStyle: 'body' },
      },
      md: {
        content: { width: 'md', padding: 4 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      },
      lg: {
        content: { width: 'lg', padding: 6 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
