import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
  header: { selector: '& [data-part="header"]' },
  closeTrigger: { selector: '& [data-part="close-trigger"]' },
  footer: { selector: '& [data-part="footer"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
});

export const drawerRecipe = defineRecipe({
  className: 'Drawer',
  base: parts({
    content: {
      padding: 'lg',
      layerStyle: 'panel.raised',
    },
    header: {
      padding: 'md',
      borderBottom: '1px solid',
      borderColor: 'border',
    },
    closeTrigger: {
      position: 'absolute',
      top: 'sm',
      right: 'sm',
    },
    footer: {
      padding: 'md',
      borderTop: '1px solid',
      borderColor: 'border',
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
  }),
  variants: {
    placement: {
      left: parts({
        content: {
          roundedRight: 'lg',
          roundedLeft: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'drawer-in-left',
          },
          _closed: {
            animation: 'drawer-out-left',
          },
        },
      }),
      right: parts({
        content: {
          roundedLeft: 'lg',
          roundedRight: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'drawer-in-right',
          },
          _closed: {
            animation: 'drawer-out-right',
          },
        },
      }),
      top: parts({
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          _open: {
            animation: 'drawer-in-top',
          },
          _closed: {
            animation: 'drawer-out-top',
          },
        },
      }),
      bottom: parts({
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          _open: {
            animation: 'drawer-in-bottom',
          },
          _closed: {
            animation: 'drawer-out-bottom',
          },
        },
      }),
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
