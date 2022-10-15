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
    borderRadius: '$full',
    backgroundPosition: '50%',
    backgroundSize: '100% 100%',
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
      backgroundImage:
        'url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nOCcgY3k9JzgnIHI9JzMnLz48L3N2Zz4=)',
      svg: {
        opacity: 1,
      },
    },
  },
  description: {
    color: '$neutral400',
  },
});
