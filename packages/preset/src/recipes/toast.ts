import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  viewport: { selector: '& [data-part="viewport"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  closeTrigger: { selector: '& [data-part="close-trigger"]' },
});

export const toastRecipe = defineRecipe({
  className: 'Toast',
  base: parts({
    root: {
      layerStyle: 'panel.raised',
      padding: 'md',
      minWidth: 'sm',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
    viewport: {
      position: 'fixed',
      top: 'auto',
      bottom: '0',
      right: '0',
      maxH: 'full',
      width: 'full',
      display: 'flex',
      p: 'sm',
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
    closeTrigger: {
      position: 'absolute',
      top: 'sm',
      right: 'sm',
    },
  }),
});
