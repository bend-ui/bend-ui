import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  overlay: { selector: '[data-pat="overlay"]' },
  content: { selector: '&' },
  header: { selector: '& [data-part="header"]' },
  close: { selector: '& [data-part="close"]' },
  footer: { selector: '& [data-part="footer"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  positioner: { selector: '& [data-part="positioner"]' },
  action: { selector: '& [data-part="action"]' },
  cancel: { selector: '& [data-part="cancel"]' },
});

export const modalRecipe = defineRecipe({
  description: 'Modal styles',
  className: 'Modal',
  base: parts({
    overlay: {
      position: 'fixed',
      inset: 0,
      bgColor: 'neutral.950/80',
      _open: {
        animation: 'overlay.in',
      },
      _closed: {
        animation: 'overlay.out',
      },
    },
    content: {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxW: '450px',
      maxH: '85vh',
      layerStyle: 'surface.overlay',
      padding: 'lg',
      rounded: 'lg',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 'lg',
    },
    footer: {},
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
  }),
  jsx: ['Modal', 'AlertDialog', 'Dialog'],
});
