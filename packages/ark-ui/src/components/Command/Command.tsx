import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import { command } from '@bend-ui/styled-system/recipes';
import type { CommandVariantProps } from '@bend-ui/styled-system/recipes';
import { withRecipe, withParts } from '@bend-ui/core';

export type CommandRootProps = ArkDialog.RootProps;
const CommandRoot = ArkDialog.Root;
const CommandBackdrop = ArkDialog.Backdrop;

export type CommandPositionerProps = ArkDialog.RootProps & CommandVariantProps;

const CommandPositioner = withRecipe<CommandPositionerProps>(
  ArkDialog.Positioner,
  command,
  'positioner',
);

const CommandContent = withParts(ArkDialog.Content, 'content');
const CommandTitle = withParts(ArkDialog.Title, 'title');
const CommandDescription = withParts(ArkDialog.Description, 'description');
const CommandCloseTrigger = withParts(ArkDialog.CloseTrigger, 'close-trigger');

export type CommandProps = CommandRootProps & CommandVariantProps;

const Component = (props: CommandProps) => {
  const [variantProps, rest] = command.splitVariantProps(props);
  return (
    <CommandRoot open {...rest}>
      <Portal>
        <CommandBackdrop />
        <CommandPositioner {...variantProps}>
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
