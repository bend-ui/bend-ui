import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  closeTrigger: { selector: '& [data-part="close-trigger"]' },
});

export const dialogRecipe = defineRecipe({
  className: 'Dialog',
  base: parts({
    root: {},
    content: {
      layerStyle: 'panel.raised',
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
  }),
  variants: {
    size: {
      sm: parts({
        content: { minWidth: 'sm', padding: 2 },
        title: { textStyle: 'title' },
        description: { textStyle: 'body' },
      }),
      md: parts({
        content: { minWidth: 'md', padding: 4 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      }),
      lg: parts({
        content: { minWidth: 'lg', padding: 6 },
        title: { textStyle: 'title' },
        description: { textStyle: 'subtitle' },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
