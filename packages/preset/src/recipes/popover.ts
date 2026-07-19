import { defineSlotRecipe } from '@pandacss/dev';

export const popoverRecipe = defineSlotRecipe({
  slots: [
    'content',
    'title',
    'description',
    'arrow',
    'arrowTip',
    'closeTrigger',
  ],
  className: 'Popover',
  base: {
    content: {
      layerStyle: 'surface.overlay',
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
  },
  variants: {
    size: {
      sm: {
        content: { padding: 'sm' },
      },
      md: {
        content: { padding: 'md' },
      },
      lg: {
        content: { padding: 'lg' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
