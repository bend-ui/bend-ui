import { forwardRef } from 'react';
import * as ReactAria from 'react-aria-components';
import { checkbox } from '@bend-ui/styled-system/recipes';
import { cx } from '@bend-ui/styled-system/css';
import type { CheckboxVariantProps } from '@bend-ui/styled-system/recipes';

export interface CheckboxProps
  extends ReactAria.CheckboxProps, CheckboxVariantProps {
  className?: string;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const classes = checkbox();
    return (
      <ReactAria.Checkbox
        ref={ref}
        data-part="root"
        className={cx(classes, className)}
        {...rest}
      >
        <div data-part="indicator">
          <svg aria-hidden="true" viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
      </ReactAria.Checkbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
