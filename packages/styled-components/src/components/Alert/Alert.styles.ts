import { createStyles } from '../../styles';

export default createStyles(({ palette }) => ({
  root: {
    padding: '$sm',
    color: `$${palette}On`,
    backgroundColor: `$${palette}`,
    borderRadius: '$md',
  },
}));
