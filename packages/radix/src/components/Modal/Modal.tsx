import { Dialog as DialogPrimitive } from 'radix-ui';
import { modal } from '@bend-ui/styled-system/recipes';
import { styled } from '@bend-ui/styled-system/jsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(modal);

const Root = withProvider(DialogPrimitive.Root, 'root');

const Trigger = DialogPrimitive.Trigger;

const Portal = DialogPrimitive.Portal;

const Overlay = withPart(styled(DialogPrimitive.Overlay), 'overlay');

const Content = withPart(styled(DialogPrimitive.Content), 'content');

const Header = withPart(styled('div'), 'header');

const Title = DialogPrimitive.Title;

const Description = DialogPrimitive.Description;

const Footer = withPart(styled('div'), 'footer');

const Close = withPart(styled(DialogPrimitive.Close), 'close');

export interface ModalProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  withOverlay?: boolean;
}

const Component = (props: ModalProps) => {
  const {
    children,
    trigger,
    title,
    description,
    withOverlay = true,
    ...rest
  } = props;
  return (
    <Root {...rest}>
      {!!trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        {withOverlay && <Overlay />}
        <Content>
          <Close asChild>Close</Close>
          {!!title && <Title>{title}</Title>}
          {!!description && <Description>{description}</Description>}
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export const Modal = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Header,
  Title,
  Description,
  Footer,
  Close,
});

export default Modal;
