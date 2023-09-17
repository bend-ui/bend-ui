import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { TbCaretDown, TbCheck } from 'react-icons/tb';
import { cx } from '@particles/panda-system/css';
import { select } from '@particles/panda-system/recipes';

import { createStyleContext } from './style-context';

const { withProvider, withContext, useStyleContext } =
  createStyleContext(select);

const Root = withProvider(SelectPrimitive.Root, 'root');

const Value = withContext(SelectPrimitive.Value, 'value');

const Group = withContext(SelectPrimitive.Group, 'group');

const Trigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const classes = useStyleContext();

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cx(classes?.trigger, className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <TbCaretDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

Trigger.displayName = SelectPrimitive.Trigger.displayName;

const Content = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => {
  const classes = useStyleContext();
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cx(classes?.content, className)}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

Content.displayName = SelectPrimitive.Content.displayName;

const Label = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const classes = useStyleContext();
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={cx(classes?.label, className)}
      {...props}
    />
  );
});

Label.displayName = SelectPrimitive.Label.displayName;

const Item = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const classes = useStyleContext();
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cx(classes?.item, className)}
      {...props}
    >
      <span>
        <SelectPrimitive.ItemIndicator>
          <TbCheck />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

Item.displayName = SelectPrimitive.Item.displayName;

const Separator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const classes = useStyleContext();

  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={cx(classes?.label, className)}
      {...props}
    />
  );
});

Separator.displayName = SelectPrimitive.Separator.displayName;

export default Object.assign(Root, {
  Root,
  Trigger,
  Value,
  Content,
  Group,
  Label,
  Item,
  Separator,
});
