import { Dialog, Portal } from '@ark-ui/react';
import { drawer } from '@particles/styled-system/recipes';
import { DismissButton } from '@particles/react';
import { forwardRef } from 'react';
import type { DrawerVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import { Button } from '..';
import type { DrawerProps } from './Drawer.types';

const { withRootProvider, withContext } = createStyleContext(drawer);

const Root = withRootProvider<Dialog.RootProps & DrawerVariantProps>(
  Dialog.Root,
);

const Trigger = withContext<HTMLButtonElement, Dialog.TriggerProps>(
  Dialog.Trigger,
  'trigger',
);

const Backdrop = withContext<HTMLDivElement, Dialog.BackdropProps>(
  Dialog.Backdrop,
  'overlay',
);

const Positioner = Dialog.Positioner;

const Content = withContext<HTMLDivElement, Dialog.ContentProps>(
  Dialog.Content,
  'content',
);

const Title = withContext<HTMLDivElement, Dialog.TitleProps>(
  Dialog.Title,
  'title',
);

const Description = withContext<HTMLParagraphElement, Dialog.DescriptionProps>(
  Dialog.Description,
  'description',
);

const CloseTrigger = withContext<HTMLButtonElement, Dialog.CloseTriggerProps>(
  Dialog.CloseTrigger,
  'close',
);

const Component = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { children, title, description } = props;
  return (
    <Root {...props}>
      <Trigger asChild>
        <Button>Trigger</Button>
      </Trigger>
      <Portal>
        <Backdrop />
        <Positioner>
          <Content ref={ref}>
            {!!title && <Title>{title}</Title>}
            {!!description && <Description>{description}</Description>}
            {children}
            <CloseTrigger asChild>
              <DismissButton />
            </CloseTrigger>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
});

Component.displayName = 'Drawer';

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
