import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  positioner: { selector: '&' },
  content: { selector: '& [data-component-part="content"]' },
  title: { selector: '& [data-component-part="title"]' },
  description: { selector: '& [data-component-part="description"]' },
  closeTrigger: { selector: '& [data-component-part="close"]' },
});

export const dialogRecipe = defineRecipe({
  className: 'Dialog',
  base: parts({
    positioner: {
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
