import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  label: { selector: '& [data-part="label"]' },
  positioner: { selector: '& [data-part="positioner"]' },
  content: { selector: '& [data-part="content"]' },
  item: { selector: '& [data-part="item"]' },
  itemText: { selector: '& [data-part="itemText"]' },
  itemIndicator: { selector: '& [data-part="itemIndicator"]' },
  clearTrigger: { selector: '& [data-part="clearTrigger"]' },
});

export const comboboxRecipe = defineRecipe({
  className: 'Combobox',
  description: 'A combobox style',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      width: 'full',
    },
    label: {
      color: 'red.500',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    positioner: {
      zIndex: 'dropdown',
    },
    content: {
      background: 'red.500',
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'stroke',
      boxShadow: 'lg',
      maxHeight: '64',
      overflow: 'auto',
      _hidden: {
        display: 'none',
      },
    },
    item: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: '2',
      height: '10',
      _hover: {
        bg: 'red.500',
      },
      _highlighted: {
        bg: 'red.500',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _selected: {
        bg: 'red.500',
      },
    },
    itemText: {
      textStyle: 'sm',
    },
    itemIndicator: {
      color: 'red.500',
    },
    clearTrigger: {
      color: 'red.500',
      cursor: 'pointer',
      _hover: {
        color: 'red.500',
      },
    },
  }),
  variants: {
    size: {
      sm: parts({
        item: { height: '8', fontSize: 'sm' },
      }),
      md: parts({
        item: { height: '10', fontSize: 'md' },
      }),
      lg: parts({
        item: { height: '12', fontSize: 'lg' },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
