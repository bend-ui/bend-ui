import * as DialogPrimitive from '@radix-ui/react-dialog';
import { TbX } from 'react-icons/tb';
import { modal } from '@particles/styled-system/recipes';
import { cx } from '@particles/styled-system/css';
import { Button } from '@particles/panda-radix';
import type { ModalVariant } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

const Root = DialogPrimitive.Root;

Root.displayName = 'Modal.Root';

const Trigger = DialogPrimitive.Trigger;

Trigger.displayName = 'Modal.Trigger';

type ModalContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> &
  DialogPrimitive.DialogProps &
  ModalVariant;

const Content = (props: ModalContentProps) => {
  const { children, className, ...rest } = props;
  const classes = modal();
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={classes.overlay} />
      <DialogPrimitive.Content
        className={cx(classes.content, className)}
        {...rest}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Close"
          asChild
          className={classes.close}
        >
          <Button>
            <TbX />
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

Content.displayName = 'Modal.Content';

export default Object.assign(Root, { Trigger, Content });
