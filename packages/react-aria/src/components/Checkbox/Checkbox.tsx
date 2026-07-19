import { forwardRef } from 'react';
import * as ReactAria from 'react-aria-components';
import { checkbox } from '@bend-ui/styled-system/recipes';
import { cx } from '@bend-ui/styled-system/css';
import type { CheckboxVariantProps } from '@bend-ui/styled-system/recipes';

export interface CheckboxProps
  extends ReactAria.CheckboxProps, CheckboxVariantProps {}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const [variantProps, checkboxProps] = checkbox.splitVariantProps(props);
    const { className, ...rest } = checkboxProps;
    const classes = checkbox(variantProps);

    return (
      <ReactAria.Checkbox
        ref={ref}
        data-part="root"
        className={ReactAria.composeRenderProps(className, (className) =>
          cx(classes.root, className),
        )}
        {...rest}
      >
        <div
          className={cx(classes.control, classes.indicator)}
          data-part="indicator"
        >
          <svg aria-hidden="true" viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
      </ReactAria.Checkbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
