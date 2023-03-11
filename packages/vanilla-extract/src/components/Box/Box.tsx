import clsx from 'clsx';
import { sprinkles } from '../../theme/sprinkles.css';
import type { Sprinkles } from '../../theme/sprinkles.css';

export interface BoxProps {
  children?: React.ReactNode;
  sx?: Sprinkles;
}

export const Box = (props: BoxProps) => {
  const { children, sx, ...rest } = props;

  const classNames = clsx(sx && sprinkles(sx));

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Box;
