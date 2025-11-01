import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrowTip"]' },
  checkboxItem: { selector: '& [data-part="checkboxItem"]' },
  content: { selector: '& [data-part="content"]' },
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
    content: {
      padding: 'md',
      layerStyle: 'surface.overlay',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
  }),
});
