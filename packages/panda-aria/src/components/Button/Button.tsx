import * as ReactAria from 'react-aria-components';

import { cx } from '@particles/panda-system/css';
import { button } from '@particles/panda-system/recipes';
import type { ButtonVariantProps } from '@particles/panda-system/recipes';

export interface ButtonProps extends ReactAria.ButtonProps, ButtonVariantProps {
  className?: string;
}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  const classes = button({ variant, size });
  return (
    <ReactAria.Button className={cx(classes.root, className)} {...props} />
  );
};
