import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  icon: { selector: '& [data-part="icon"]' },
  title: { selector: '& [data-part="title"]' },
  content: { selector: '& [data-part="content"]' },
  footer: { selector: '& [data-part="footer"]' },
  dismiss: { selector: '& [data-part="dismiss"]' },
});

export const alertRecipe = defineRecipe({
  className: 'Alert',
  base: parts({
    root: {
      padding: 'md',
      borderRadius: 'base',
      gap: 'md',
      border: 'base',
    },
    icon: {
      h: '1lh',
    },
    title: {
      textStyle: 'body',
      fontWeight: 'bold',
    },
    content: {},
    footer: {},
    dismiss: {},
  }),
  variants: {
    palette: {
      default: parts({
        root: {
          colorPalette: 'bg',
        },
      }),
      primary: parts({
        root: {
          colorPalette: 'primary',
        },
      }),
      error: parts({
        root: {
          colorPalette: 'error',
        },
      }),
      warning: parts({
        root: {
          colorPalette: 'warning',
        },
      }),
      success: parts({
        root: {
          colorPalette: 'success',
        },
      }),
      info: parts({
        root: {
          colorPalette: 'info',
        },
      }),
    },
    variant: {
      solid: parts({
        root: {
          color: 'colorPalette.text.inverse',
          backgroundColor: 'colorPalette.fill',
        },
      }),
      subtle: parts({
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'colorPalette.fill',
        },
      }),
      outline: parts({
        root: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'colorPalette',
        },
        icon: {
          color: 'colorPalette',
        },
        title: {
          color: 'colorPalette',
        },
      }),
    },
  },
  defaultVariants: {
    palette: 'default',
    variant: 'solid',
  },
});
