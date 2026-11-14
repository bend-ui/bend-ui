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
      color: 'text',
      borderRadius: 'md',
      maxWidth: 'min(24rem, var(--available-width, calc(100vw - 1rem)))',
      maxHeight: 'var(--available-height, calc(100vh - 1rem))',
      overflowY: 'auto',
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
      color: 'text',
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
