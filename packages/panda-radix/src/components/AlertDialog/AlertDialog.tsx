import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { styled } from '@particles/panda-system/jsx';
import { modal } from '@particles/panda-system/recipes';
import { createStyleContext } from '../../utils';
import type { ReactNode } from 'react';

const { withProvider, withContext } = createStyleContext(modal);

const Root = withProvider(AlertDialogPrimitive.Root, 'root');

const Trigger = AlertDialogPrimitive.Trigger;

const Portal = AlertDialogPrimitive.Portal;

const Overlay = withContext(styled(AlertDialogPrimitive.Overlay), 'overlay');

const Content = withContext(styled(AlertDialogPrimitive.Content), 'content');

const Header = withContext(styled('div'), 'header');

const Footer = withContext(styled('div'), 'footer');

const Title = withContext(styled(AlertDialogPrimitive.Title), 'title');

export const Description = withContext(
  styled(AlertDialogPrimitive.Description),
  'description',
);

const Action = withContext(styled(AlertDialogPrimitive.Action), 'action');

const Cancel = withContext(styled(AlertDialogPrimitive.Cancel), 'cancel');

export interface AlertDialogProps {
  children: ReactNode;
}

const AlertDialog = (props: AlertDialogProps) => {
  const { children, ...rest } = props;
  return (
    <Root {...rest}>
      <Portal>
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
};

export default Object.assign(AlertDialog, {
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
