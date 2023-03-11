import type * as CSS from 'csstype';

export const mediaStyles: Record<string, CSS.Properties> = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr auto',
    gridTemplateAreas: `
      "image body"
      "image footer"
    `,
  },
  image: {
    gridArea: 'image',
  },
  body: {
    gridArea: 'body',
  },
  footer: {
    gridArea: 'footer',
  },
};
