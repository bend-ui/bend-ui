import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import { command } from '@bend-ui/styled-system/recipes';
import type { CommandVariantProps } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(command);

export type CommandRootProps = ArkDialog.RootProps & CommandVariantProps;
const CommandRoot = withProvider(ArkDialog.Root, 'root');
const CommandBackdrop = ArkDialog.Backdrop;

export type CommandPositionerProps = ArkDialog.PositionerProps;

const CommandPositioner = ArkDialog.Positioner;

const CommandContent = withContext(ArkDialog.Content, 'content');
const CommandTitle = withContext(ArkDialog.Title, 'title');
const CommandDescription = withContext(ArkDialog.Description, 'description');
const CommandCloseTrigger = withContext(
  ArkDialog.CloseTrigger,
  'closeTrigger',
);

export type CommandProps = CommandRootProps & CommandVariantProps;

const Component = (props: CommandProps) => {
  return (
    <CommandRoot open {...props}>
      <Portal>
        <CommandBackdrop />
        <CommandPositioner>
          <CommandContent>
            <CommandTitle>Dialog Title</CommandTitle>
            <CommandDescription>Dialog Description</CommandDescription>
            <CommandCloseTrigger>Close</CommandCloseTrigger>
          </CommandContent>
        </CommandPositioner>
      </Portal>
    </CommandRoot>
  );
};

export const Command = Component;
