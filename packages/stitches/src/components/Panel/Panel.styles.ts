import { CSS } from '../../styles';
import { createStyles } from '../../styles/createStyles';

const root: CSS = {
  color: '$on-surface',
  backgroundColor: '$surface',
  padding: '$md',
  borderRadius: '$md',
  boxShadow: '$md',
};

export default createStyles(() => {
  return {
    root,
  };
});
