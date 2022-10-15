import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'fit-content(200px) 1fr',
    gridTemplateRows: '1fr auto',
    gridTemplateAreas: `
      "image content"
      "image content"
    `,
    gap: '$sm',
  },
  image: {
    gridArea: 'image',
  },
  content: {
    gridArea: 'content',
  },
});
