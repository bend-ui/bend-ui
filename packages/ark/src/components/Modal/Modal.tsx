import { Dialog, Portal } from '@ark-ui/react';

const Root = Dialog.Root;

const Trigger = Dialog.Trigger;

const Backdrop = Dialog.Backdrop;

const Positioner = Dialog.Positioner;

const Content = Dialog.Content;

const Title = Dialog.Title;

const Description = Dialog.Description;

const CloseTrigger = Dialog.CloseTrigger;

const Component = () => (
  <Root>
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
