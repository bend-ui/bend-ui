import { Dialog as DialogPrimitive } from 'radix-ui';
import { drawer } from '@bend-ui/styled-system/recipes';
import { styled } from '@bend-ui/styled-system/jsx';
import type { DrawerVariantProps } from '@bend-ui/styled-system/recipes';
import type { ReactNode } from 'react';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(drawer);

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
