import { createStyles } from '../../styles';

export default createStyles(({ theme, variant }) => ({
  root: {
    ...theme.fns.textStyles(variant),
  },
}));
