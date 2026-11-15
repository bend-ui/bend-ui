import type { SlotRecipeComponent } from '@bend-ui/core';
import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import { command } from '@bend-ui/styled-system/recipes';
import type { CommandVariantProps } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(command);

export type CommandRootProps = ArkDialog.RootProps & CommandVariantProps;
const CommandRoot: SlotRecipeComponent<
  typeof ArkDialog.Root,
  (typeof command)['__type']
> = withProvider(ArkDialog.Root, 'root');
const CommandBackdrop = ArkDialog.Backdrop;

export type CommandPositionerProps = ArkDialog.PositionerProps;

const CommandPositioner = ArkDialog.Positioner;

const CommandContent = withContext(ArkDialog.Content, 'content');
const CommandTitle = withContext(ArkDialog.Title, 'title');
const CommandDescription = withContext(ArkDialog.Description, 'description');
const CommandCloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger');

export interface CommandProps extends CommandRootProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Content of the close button. Omit to render no close button. */
  closeTrigger?: React.ReactNode;
  children?: React.ReactNode;
}

const Component = (props: CommandProps) => {
  const { title, description, closeTrigger, children, ...rest } = props;
  return (
    <CommandRoot {...rest}>
      <Portal>
        <CommandBackdrop />
        <CommandPositioner>
          <CommandContent>
            {!!title && <CommandTitle>{title}</CommandTitle>}
            {!!description && (
              <CommandDescription>{description}</CommandDescription>
            )}
            {children}
            {!!closeTrigger && (
              <CommandCloseTrigger>{closeTrigger}</CommandCloseTrigger>
            )}
          </CommandContent>
        </CommandPositioner>
      </Portal>
    </CommandRoot>
  );
};

export const Command = Object.assign(Component, {
  Root: CommandRoot,
  Backdrop: CommandBackdrop,
  Positioner: CommandPositioner,
  Content: CommandContent,
  Title: CommandTitle,
  Description: CommandDescription,
  CloseTrigger: CommandCloseTrigger,
});
