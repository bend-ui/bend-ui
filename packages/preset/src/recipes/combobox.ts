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
      color: 'text.strong',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    positioner: {
      zIndex: 'dropdown',
    },
    content: {
      layerStyle: 'surface.overlay',
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
        bg: 'fill.hover',
      },
      _highlighted: {
        bg: 'fill.hover',
      },
      _disabled: {
        opacity: 'state.disabled',
        cursor: 'not-allowed',
      },
      _selected: {
        bg: 'fill.selected',
      },
    },
    itemText: {
      textStyle: 'sm',
    },
    itemIndicator: {
      color: 'icon.strong',
    },
    clearTrigger: {},
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
