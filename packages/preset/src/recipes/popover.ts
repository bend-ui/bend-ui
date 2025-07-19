import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrowTip"]' },
  closeTrigger: { selector: '& [data-part="closeTrigger"]' },
});

export const popoverRecipe = defineRecipe({
  className: 'Popover',
  base: parts({
    root: {
      position: 'relative',
    },
    content: {
      layerStyle: 'panel.raised',
      borderRadius: 'md',
      _open: {
        animation: 'fade-in',
      },
      _closed: {
        animation: 'fade-out',
      },
    },
    title: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
    description: {
      fontSize: 'sm',
      color: 'gray.500',
    },
  }),
  variants: {
    size: {
      sm: parts({
        content: { padding: 'sm', maxWidth: 'sm' },
      }),
      md: parts({
        content: { padding: 'md', maxWidth: 'md' },
      }),
      lg: parts({
        content: { padding: 'lg', maxWidth: 'lg' },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
