import * as ReactAria from 'react-aria-components';

import { cx } from '@bend-ui/styled-system/css';
import { button } from '@bend-ui/styled-system/recipes';
import type { ButtonVariantProps } from '@bend-ui/styled-system/recipes';

export interface ButtonProps extends ReactAria.ButtonProps, ButtonVariantProps {
  className?: string;
}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  const classes = button({ variant, size });
  return (
    <ReactAria.Button className={cx(classes.root, className)} {...props} />
  );
};
