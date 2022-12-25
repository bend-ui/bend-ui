import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { css, DefaultComponentProps } from '../../styles';

type BoxProps = DefaultComponentProps;

export const Box = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { as: Component = 'div', children, sx, className, ...rest } = props;

  const sxStyles = css(sx)();

  return (
    <Component
      className={clsx(sxStyles.className, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Box.displayName = 'Box';
