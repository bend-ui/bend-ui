import { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { TbChevronDown } from 'react-icons/tb';
import { cx } from '@particles/panda-system/css';
import { createComponent } from '@particles/primitives';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Root = AccordionPrimitive.Root;

const Item = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item ref={ref} className={cx(className)} {...rest} />
  );
});

Item.displayName = 'AccordionItem';

const Trigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger ref={ref} className={cx(className)} {...rest}>
        {children}
        <TbChevronDown />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

Trigger.displayName = AccordionPrimitive.Trigger.displayName;

const Content = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Content ref={ref} className={cx(className)} {...rest}>
      <div>{children}</div>
    </AccordionPrimitive.Content>
  );
});

Content.displayName = AccordionPrimitive.Content.displayName;

export default createComponent(Root, {
  Root,
  Item,
  Trigger,
  Content,
});
