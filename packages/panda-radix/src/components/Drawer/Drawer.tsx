import * as DialogPrimitive from '@radix-ui/react-dialog';
import { drawer } from '@particles/panda-system/recipes';
import { styled } from '@particles/panda-system/jsx';
import type { DrawerVariantProps } from '@particles/panda-system/recipes';
import { createStyleContext } from '../../utils';
import type { ReactNode } from 'react';

const { withContext, withProvider } = createStyleContext(drawer);

const Root = withProvider(DialogPrimitive.Root, 'root');

const Trigger = DialogPrimitive.Trigger;

const Portal = DialogPrimitive.Portal;

const Overlay = withContext(styled(DialogPrimitive.Overlay), 'overlay');

const Content = withContext(styled(DialogPrimitive.Content), 'content');

const Header = withContext(styled('div'), 'header');

const Title = DialogPrimitive.Title;

const Description = DialogPrimitive.Description;

const Footer = withContext(styled('div'), 'footer');

const Close = withContext(styled(DialogPrimitive.Close), 'close');

export interface DrawerProps extends DialogPrimitive.DialogProps {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  withOverlay?: boolean;
  placement?: DrawerVariantProps['placement'];
}

const Drawer = (props: DrawerProps) => {
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

export default Object.assign(Drawer, {
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
