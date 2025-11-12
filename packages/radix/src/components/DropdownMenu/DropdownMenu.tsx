import { forwardRef } from 'react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { styled } from '@particles/styled-system/jsx';
import { css, cx } from '@particles/styled-system/css';
import { menu, icon } from '@particles/styled-system/recipes';
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
} from 'react';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(menu);

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
    <ChevronRightIcon className={icon({ left: 'auto' })} />
  </DropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const Content = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const classes = menu();
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={cx(classes, className)}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});
Content.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = withPart(DropdownMenuPrimitive.Item, 'item');
Item.displayName = DropdownMenuPrimitive.Item.displayName;

const ItemIndicator = withPart(
  styled(DropdownMenuPrimitive.ItemIndicator),
  'itemIndicator',
);

const CheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} {...props}>
    <ItemIndicator>
      <CheckIcon className={icon()} />
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
      <CircleIcon className={icon({ size: 'xs', fillCurrent: true })} />
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

const Trigger = withPart(styled(DropdownMenuPrimitive.Trigger), 'trigger');

const Group = withPart(styled(DropdownMenuPrimitive.Group), 'group');

const Portal = withPart(styled(DropdownMenuPrimitive.Portal), 'portal');

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

const Separator = withPart(
  styled(DropdownMenuPrimitive.Separator),
  'separator',
);

const Shortcut = withPart(styled('span'), 'shortcut');

export type DropdownMenuProps = ComponentPropsWithoutRef<typeof Root> & {
  children: ReactNode;
  trigger: ReactNode;
};

const Component = (props: DropdownMenuProps) => {
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

export const DropdownMenu = Object.assign(Component, {
  Root,
  Trigger,
  Content,
  Item,
  Group,
  Separator,
  Shortcut,
});

export default DropdownMenu;
