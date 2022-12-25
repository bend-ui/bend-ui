import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';
import useStyles, { BadgeStylesParams } from './Badge.styles';

export type BadgeProps = {
  icon?: React.ReactElement;
  iconEnd?: React.ReactElement;
} & BadgeStylesParams &
  DefaultComponentProps;

export const Badge = forwardRef<BadgeProps, 'span'>((props, ref) => {
  const {
    children,
    as = 'span',
    palette = 'neutral',
    variant = 'solid',
    size = 'md',
    isRounded = true,
    icon,
    iconEnd,
    ...rest
  } = props;
  const { styles } = useStyles({ palette, variant, isRounded, size });
  return (
    <Box ref={ref} as={as} className={clsx(styles['root'])} {...rest}>
      {icon}
      {children}
      {iconEnd}
    </Box>
  );
});
