import { forwardRef } from 'react';
import * as ReactAria from 'react-aria-components';
import { checkbox } from '@particles/styled-system/recipes';
import { cx } from '@particles/styled-system/css';
import type { CheckboxVariantProps } from '@particles/styled-system/recipes';

export interface CheckboxProps
  extends ReactAria.CheckboxProps,
    CheckboxVariantProps {
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const classes = checkbox();
    return (
      <ReactAria.Checkbox className={cx(classes.root, className)} {...rest}>
        <div className={classes.indicator}>
          <svg aria-hidden="true" viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
      </ReactAria.Checkbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
