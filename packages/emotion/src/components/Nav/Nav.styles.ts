import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
    variants: {
      orientation: {
        horizontal: { flexDirection: 'row' },
        vertical: { flexDirection: 'column' },
      },
    },
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: '$xs',
    px: '$md',
    gap: '$sm',
    backgroundColor: '$surface',
    textDecoration: 'none',
    fontWeight: '$medium',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      color: 'inherit',
    },
    '&:visited': {
      color: 'inherit',
    },
    variants: {
      variant: {
        subtle: {
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '$neutral-subtle',
          },
        },
        pill: {
          borderRadius: '$md',
          '&:hover': {
            backgroundColor: '$primary-subtle',
          },
          '&[aria-current], &[aria-selected="true"]': {
            color: '$primary',
            backgroundColor: '$primary-subtle',
          },
        },
        tab: {
          borderTopLeftRadius: '$md',
          borderTopRightRadius: '$md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderBottom: 'none',
          '&:hover': {
            borderColor: '$neutral-hover',
          },
          '&[aria-current], &[aria-selected="true"]': {
            borderColor: '$neutral-subtle',
          },
        },
        underline: {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'transparent',
          },
          '&:hover::after': {
            borderBottomColor: '$primary',
          },
          '&[aria-current]::after, &[aria-selected="true"]::after': {
            borderBottomColor: '$primary',
          },
        },
      },
      isFull: {
        true: {
          flex: '1 1 auto',
        },
      },
    },
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});
