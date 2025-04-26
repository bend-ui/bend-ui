import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  closeTrigger: { selector: '& [data-part="close"]' },
});

export const commandRecipe = defineRecipe({
  className: 'Command',
  base: parts({
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      width: '100vw',
      height: '100dvh',
      zIndex: 'modal',
    },
    content: {
      position: 'relative',
    },
  }),
});

export const dialogParts = parts;
