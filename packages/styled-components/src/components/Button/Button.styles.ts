import { CSSObject } from 'system-props';
import { createStyles, variant } from '../../styles';
import { ButtonProps } from './Button';

const buttonStyles = (props: ButtonProps): CSSObject => {
  const { palette } = props;
  return {
    background: 'unset',
    display: 'inline-flex',
    cursor: 'default',
    userSelect: 'none',
    textDecoration: 'none',
    gap: '$xs',
    alignItems: 'center',
    color: '$white',
    border: '1px solid transparent',
    borderRadius: '$full',
    ...variant({
      prop: 'variant',
      variants: {
        solid: {
          color: `$on-${palette}`,
          backgroundColor: `$${palette}`,
          '&:hover': {
            backgroundColor: `$${palette}-hover`,
          },
        },
        outline: {
          color: `$${palette}`,
          borderColor: `$${palette}`,
          '&:hover': {
            color: `$${palette}-hover`,
            borderColor: `$${palette}-hover`,
          },
        },
      },
    })(props),
    ...variant({
      prop: 'size',
      variants: {
        sm: {
          paddingY: '$xs',
          paddingX: '$sm',
        },
        md: {
          padding: '$sm',
          paddingX: '$md',
        },
        lg: {
          paddingY: '$md',
          paddingX: '$lg',
        },
      },
    })(props),
  };
};

const buttonLoadingStyles = {};

export default createStyles((props: ButtonProps) => {
  return {
    root: buttonStyles(props),
    loading: buttonLoadingStyles,
  };
});
