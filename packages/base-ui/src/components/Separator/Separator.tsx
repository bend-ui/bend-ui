import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';
import { cx } from '@bend-ui/styled-system/css';
import { separator } from '@bend-ui/styled-system/recipes';

export type SeparatorProps = SeparatorPrimitive.Props;
function Component({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive
      {...props}
      orientation={orientation}
      className={(state) =>
        cx(
          separator({ orientation }),
          typeof className === 'function' ? className(state) : className,
        )
      }
    />
  );
}
export const Separator = Object.assign(Component, { Root: Component });
