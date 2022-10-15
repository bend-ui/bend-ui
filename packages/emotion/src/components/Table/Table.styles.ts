import { createStyles } from '../../styles';

export default createStyles({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tr: {},
  th: {
    backgroundColor: '$neutral-subtle',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '$outline',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '$outline',
    padding: '$xs',
    textAlign: 'left',
  },
  td: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '$outline',
    padding: '$xs',
  },
});
