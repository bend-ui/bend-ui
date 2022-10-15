import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: '$xxs',
  },
  indicator: {
    color: 'white',
    backgroundColor: 'rgb(34, 139, 230)',
    borderColor: 'rgb(34, 139, 230)',
    WebkitTapHighlightColor: 'transparent',
    appearance: 'none',
    width: '20px',
    height: '20px',
    border: 'none',
    borderRadius: '4px',
    padding: '0px',
    outline: '0px',
    margin: '0px',
    transition: 'border-color 100ms ease 0s, background-color 100ms ease 0s',
  },
});
