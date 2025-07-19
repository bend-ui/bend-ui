import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  wrapper: { selector: '& [data-part="wrapper"]' },
  input: { selector: '& [data-part="input"]' },
  icon: { selector: '& [data-part="icon"]' },
  element: { selector: '& [data-part="element"]' },
  addon: { selector: '& [data-part="addon"]' },
});

export const inputRecipe = defineRecipe({
  className: 'Input',
  base: parts({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      width: 'full',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 'full',
    },
    input: {
      flex: '1 1 auto',
      appearance: 'none',
      backgroundColor: 'transparent',
      width: 'full',
      _focus: {
        outline: 'none',
      },
    },
    icon: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    },
    element: {},
    addon: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      truncate: true,
    },
  }),
});
