import { createStyles } from '../../styles';

export interface NavStylesParams {
  variant?: 'default' | 'pill' | 'tab';
}

export default createStyles((params: NavStylesParams) => ({
  root: {
    variants: {
      variant: {
        tab: {
          borderBottom: '1px solid $neutral200',
        },
      },
    },
  },
  link: {
    position: 'relative',
    flex: '0 1 auto',
    textDecoration: 'none',
    px: '$md',
    py: '$sm',
    variants: {
      variant: {
        default: {
          color: '$text-muted',
          borderRadius: '$md',
          '&:hover': {
            color: '$text',
            backgroundColor: '$surface',
          },
          '&[aria-current="true"], &[aria-current="page"]': {
            color: '$on-primary',
            backgroundColor: '$primary',
          },
        },
        pill: {
          color: '$white',
          borderRadius: '$full',
          '&:hover': { backgroundColor: '$surface' },
          '&:visited': { color: '$on-surface' },
          '&[aria-current="true"], &[aria-current="page"]': {
            color: '$on-primary',
            backgroundColor: '$primary',
          },
        },
        tab: {
          color: '$on-surface',
          '&:hover': {
            '&:after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-1px',
              backgroundColor: '$primary',
              width: '100%',
              height: '2px',
            },
          },
          '&[aria-current="true"], &[aria-current="page"]': {
            '&:after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-1px',
              color: '$on-primary',
              backgroundColor: '$primary',
              width: '100%',
              height: '2px',
            },
          },
        },
      },
    },
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
  },
  dropdownToggle: {},
  dropdownItem: {},
}));
