import { Dialog, Portal } from '@ark-ui/react';
import { modal } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { ModalProps } from './Modal.types';

const { withProvider, withContext } = createStyleContext(modal);

const Root = withProvider(Dialog.Root, 'root');

const Trigger = withContext(Dialog.Trigger, 'trigger');

const Backdrop = withContext(Dialog.Backdrop, 'overlay');

const Positioner = Dialog.Positioner;

const Content = withContext(Dialog.Content, 'content');

const Title = withContext(Dialog.Title);

const Description = withContext(Dialog.Description);

const CloseTrigger = withContext(Dialog.CloseTrigger, 'close');

const Component = (props: ModalProps) => (
  <Root {...props}>
    <Trigger>Open Dialog</Trigger>
    <Portal>
      <Backdrop />
      <Positioner>
        <Content>
          <Title>Dialog Title</Title>
          <Description>Dialog Description</Description>
          <CloseTrigger>Close</CloseTrigger>
        </Content>
      </Positioner>
    </Portal>
  </Root>
);

export const Modal = Object.assign(Component, {
  Root,
  Trigger,
  Backdrop,
  Positioner,
  Content,
  Title,
  Description,
  CloseTrigger,
});
