import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrowTip"]' },
  checkboxItem: { selector: '& [data-part="checkboxItem"]' },
  indicator: { selector: '& [data-part="indicator"]' },
  itemGroupLabel: { selector: '& [data-part="itemGroupLabel"]' },
  itemGroup: { selector: '& [data-part="itemGroup"]' },
  itemIndicator: { selector: '& [data-part="itemIndicator"]' },
  item: { selector: '& [data-part="item"]' },
  itemText: { selector: '& [data-part="itemText"]' },
});

export const menuRecipe = defineRecipe({
  className: 'Menu',
  base: parts({
    root: {
      padding: 'md',
      layerStyle: 'surface.overlay',
      // _open: {
      //   animation: 'dialog-in',
      // },
      // _closed: {
      //   animation: 'dialog-out',
      // },
    },
    item: {
      padding: 'sm',
      borderRadius: 'sm',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'fill.hover',
      },
    },
  }),
});
