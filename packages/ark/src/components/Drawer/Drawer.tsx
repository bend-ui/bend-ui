import { Dialog, Portal } from '@ark-ui/react';
import { drawer } from '@particles/styled-system/recipes';
import { DismissButton } from '@particles/react';
import { createStyleContext } from '../../utils';
import type { DrawerProps } from './Drawer.types';

const { withProvider, withContext } = createStyleContext(drawer);

const Root = withProvider(Dialog.Root, 'root');

const Trigger = withContext(Dialog.Trigger, 'trigger');

const Backdrop = withContext(Dialog.Backdrop, 'overlay');

const Positioner = Dialog.Positioner;

const Content = withContext(Dialog.Content, 'content');

const Title = withContext(Dialog.Title, 'title');

const Description = withContext(Dialog.Description, 'description');

const CloseTrigger = withContext(Dialog.CloseTrigger, 'close');

const Component = (props: DrawerProps) => (
  <Root {...props}>
    <Trigger>Open Dialog</Trigger>
    <Portal>
      <Backdrop />
      <Positioner>
        <Content>
          <Title>Dialog Title</Title>
          <Description>Dialog Description</Description>
          <CloseTrigger asChild>
            <DismissButton />
          </CloseTrigger>
        </Content>
      </Positioner>
    </Portal>
  </Root>
);

export const Drawer = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Positioner,
  Content,
  Title,
  Description,
  CloseTrigger,
});
