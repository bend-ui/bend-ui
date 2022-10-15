import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridTemplateRows: 'auto 1fr',
    columnGap: '0.5rem',
    gridTemplateAreas: `
      "image title"
      "image body"
    `,
  },
  image: {
    gridArea: 'image',
  },
  title: {
    gridArea: 'title',
  },
  body: {
    gridArea: 'body',
  },
});
