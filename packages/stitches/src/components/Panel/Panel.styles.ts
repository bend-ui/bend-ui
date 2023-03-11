import { createStyles } from '../../styles/createStyles';
import type { CSS } from '../../styles';

const root: CSS = {
  color: '$on-surface',
  backgroundColor: '$surface',
  padding: '$md',
  borderRadius: '$md',
  boxShadow: '$md',
};

export default createStyles(() => ({
  root,
}));
