import {
  createStyles,
  CSSProperties,
  TextStyles,
  textStyles,
} from '../../styles';

export interface TextStylesParams {
  variant?: TextStyles;
  align?: CSSProperties['textAlign'];
  fontWeight?: 'normal' | 'bold';
}

export default createStyles((params: TextStylesParams) => ({
  root: {
    margin: '$0',
    variants: {
      variant: {
        ...textStyles,
      },
      align: {
        left: {
          textAlign: 'left',
        },
        center: {
          textAlign: 'center',
        },
        right: {
          textAlign: 'right',
        },
      },
      fontWeight: {
        normal: {
          fontWeight: '$normal',
        },
        bold: {
          fontWeight: '$bold',
        },
      },
    },
  },
}));
