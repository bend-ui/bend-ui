import { defineSlotRecipe } from '@pandacss/dev';

export const textareaConfig = {
  className: 'Textarea',
  slots: ['root', 'field'],
};

export default defineSlotRecipe({
  className: textareaConfig.className,
  slots: textareaConfig.slots,
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    field: {
      flex: '1 1 auto',
      appearance: 'none',
      backgroundColor: 'transparent',
      width: 'full',
      _focus: {
        outline: 'none',
      },
    },
  },
});
