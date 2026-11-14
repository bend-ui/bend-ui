import { defineSlotRecipe } from '@pandacss/dev';

export const tooltipRecipe = defineSlotRecipe({
  slots: ['root', 'trigger', 'content', 'arrow', 'arrowTip'],
  className: 'Tooltip',
  base: {
    content: {
      p: 'sm',
      layerStyle: 'surface.overlay',
      color: 'text',
      maxWidth: 'min(20rem, var(--available-width, calc(100vw - 1rem)))',
      overflowWrap: 'anywhere',
      _open: {
        animation: 'fade-in',
      },
      _closed: {
        animation: 'fade-out',
      },
    },
    trigger: {
      _focusVisible: { layerStyle: 'focus', outlineColor: 'text' },
    },
  },
});
