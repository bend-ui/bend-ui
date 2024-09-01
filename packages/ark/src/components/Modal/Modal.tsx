import { Dialog, Portal } from '@ark-ui/react';
import { modal } from '@particles/styled-system/recipes';
import { DismissButton } from '@particles/react';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import type { ModalVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { ComponentProps } from 'react';
import type { Assign } from '@ark-ui/react';
import type { ModalProps } from './Modal.types';

const { withRootProvider, withContext } = createStyleContext(modal);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<Dialog.RootProviderProps, ModalVariantProps>
>(Dialog.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
  Assign<Dialog.RootProps, ModalVariantProps>
>(Dialog.Root);

const Backdrop = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, Dialog.BackdropBaseProps>
>(Dialog.Backdrop, 'overlay');

const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, Dialog.CloseTriggerBaseProps>
>(Dialog.CloseTrigger, 'close');

const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, Dialog.ContentBaseProps>
>(Dialog.Content, 'content');

const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, Dialog.DescriptionBaseProps>
>(Dialog.Description, 'description');

const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, Dialog.PositionerBaseProps>
>(Dialog.Positioner, 'positioner');

const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h2'>, Dialog.TitleBaseProps>
>(Dialog.Title, 'title');

const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, Dialog.TriggerBaseProps>
>(Dialog.Trigger, 'trigger');

const Component = (props: ModalProps) => (
  <Root {...props}>
    <Trigger>Open Dialog</Trigger>
    <Portal>
      <Backdrop />
      <Positioner>
        <Content>
          <Title>Dialog Title</Title>
          <Description>Dialog Description</Description>
          <CloseTrigger>
            <DismissButton />
          </CloseTrigger>
        </Content>
      </Positioner>
    </Portal>
  </Root>
);

export const Modal = Object.assign(Component, {
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
