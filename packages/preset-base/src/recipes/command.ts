import { defineSlotRecipe } from '@pandacss/dev';

const slots = [
  'root',
  'content',
  'title',
  'description',
  'closeTrigger',
] as const;

export const commandRecipe = defineSlotRecipe({
  slots,
  className: 'Command',
  base: {
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
  },
});

export const commandParts = slots;
