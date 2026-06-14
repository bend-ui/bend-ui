import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { styled, createStyleContext } from '@bend-ui/styled-system/jsx';
import { modal } from '@bend-ui/styled-system/recipes';
import type { ReactNode } from 'react';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(modal);

const Root = withProvider(AlertDialogPrimitive.Root, 'root');

const Trigger = AlertDialogPrimitive.Trigger;

const Portal = AlertDialogPrimitive.Portal;

const Overlay = withPart(styled(AlertDialogPrimitive.Overlay), 'overlay');

const Content = withPart(styled(AlertDialogPrimitive.Content), 'content');

const Header = withPart(styled('div'), 'header');

const Footer = withPart(styled('div'), 'footer');

const Title = withPart(styled(AlertDialogPrimitive.Title), 'title');

export const Description = withPart(
  styled(AlertDialogPrimitive.Description),
  'description',
);

const Action = withPart(styled(AlertDialogPrimitive.Action), 'action');

const Cancel = withPart(styled(AlertDialogPrimitive.Cancel), 'cancel');

export interface AlertDialogProps {
  children: ReactNode;
}

const Component = (props: AlertDialogProps) => {
  const { children, ...rest } = props;
  return (
    <Root {...rest}>
      <Portal>
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
};

export const AlertDialog = Object.assign(Component, {
  Root,
  Portal,
  Overlay,
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Action,
  Cancel,
});

export default AlertDialog;
