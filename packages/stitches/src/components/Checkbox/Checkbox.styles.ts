import { createStyles } from '../../styles';

export default createStyles({
  label: {
    display: 'block',
    fontWeight: '$medium',
  },
  control: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1rem',
    height: '1rem',
    border: '1px solid $primary',
    backgroundColor: '$surface',
    borderRadius: '$DEFAULT',
    svg: {
      opacity: 0,
    },
    'input:focus + &': {
      borderColor: '$primary',
      boxShadow: '$focusRing',
    },
    'input:checked + &': {
      color: '$on-primary',
      borderColor: '$primary',
      backgroundColor: '$primary',
      svg: {
        opacity: 1,
      },
    },
  },
  description: {
    color: '$neutral400',
  },
});
