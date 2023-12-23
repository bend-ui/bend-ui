import { forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { TbCheck, TbChevronRight, TbCircle } from 'react-icons/tb';
import { styled } from '@particles/panda-system/jsx';
import { css, cx } from '@particles/panda-system/css';
import { dropdownMenu, icon } from '@particles/panda-system/recipes';
import { createStyleContext } from '../../utils';
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
} from 'react';

const { withProvider, withContext } = createStyleContext(dropdownMenu);

const SubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    insetLeft?: boolean;
  }
>(({ className, insetLeft, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  >
    {children}
    <TbChevronRight className={icon({ left: 'auto' })} />
  </DropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const Content = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const classes = dropdownMenu();
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={cx(classes.content, className)}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});
Content.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    insetLeft?: boolean;
  }
>(({ className, insetLeft, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
));
Item.displayName = DropdownMenuPrimitive.Item.displayName;

const ItemIndicator = withContext(
  styled(DropdownMenuPrimitive.ItemIndicator),
  'itemIndicator',
);

const CheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} {...props}>
    <ItemIndicator>
      <TbCheck className={icon()} />
    </ItemIndicator>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const RadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} {...props}>
    <ItemIndicator>
      <TbCircle className={icon({ size: 'xs', fillCurrent: true })} />
    </ItemIndicator>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const Label = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    insetLeft?: boolean;
  }
>(({ className, insetLeft, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
));
Label.displayName = DropdownMenuPrimitive.Label.displayName;

const Root = withProvider(styled(DropdownMenuPrimitive.Root), 'root');

const Trigger = withContext(styled(DropdownMenuPrimitive.Trigger), 'trigger');

const Group = withContext(styled(DropdownMenuPrimitive.Group), 'group');

const Portal = withContext(styled(DropdownMenuPrimitive.Portal), 'portal');

// const DropdownMenuSub = withContext(styled(DropdownMenuPrimitive.Sub), 'sub');

// const MenuRadioGroup = withContext(
//   styled(DropdownMenuPrimitive.RadioGroup),
//   'radioGroup',
// );

// const DropdownMenuSubTrigger = withContext(styled(SubTrigger), 'subTrigger');

// const DropdownMenuSubContent = withContext(
//   styled(DropdownMenuPrimitive.SubContent),
//   'subContent',
// );
// const DropdownMenuContent = withContext(styled(Content), 'content');

// const DropdownMenuItem = withContext(styled(Item), 'item');

// const DropdownMenuCheckboxItem = withContext(
//   styled(CheckboxItem),
//   'checkboxItem',
// );

// const DropdownMenuRadioItem = withContext(styled(RadioItem), 'radioItem');

// const DropdownMenuLabel = withContext(styled(Label), 'label');

const Separator = withContext(
  styled(DropdownMenuPrimitive.Separator),
  'separator',
);

const Shortcut = withContext(styled('span'), 'shortcut');

export type DropdownMenuProps = ComponentProps<typeof Root> & {
  trigger: ReactNode;
};

const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, trigger, ...rest } = props;
  return (
    <Root {...rest}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
};

export default Object.assign(DropdownMenu, {
  Root,
  Trigger,
  Content,
  Item,
  Group,
  Separator,
  Shortcut,
});
