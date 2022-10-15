import { createStyles } from '../../styles';

export default createStyles(() => {
  return {
    wrapper: {
      position: 'relative',
      display: 'flex',
      placeItems: 'center',
      border: '1px solid $gray300',
      borderRadius: '$md',
      '&:focus-within': {
        borderColor: '$primary',
      },
    },
    input: {
      flex: '1 1 auto',
      border: 'unset',
      background: 'unset',
      padding: '$xs',
      '&:focus': {
        outline: 'unset',
      },
    },
    prefix: {
      display: 'inline-flex',
      cursor: 'text',
      padding: '$xs',
      paddingRight: '0',
    },
    suffix: {
      display: 'inline-flex',
      cursor: 'text',
      padding: '$xs',
      paddingLeft: '0',
    },
  };
});
