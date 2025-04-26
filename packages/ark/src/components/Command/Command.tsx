import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import { command } from '@particles/styled-system/recipes';
import type { CommandVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

export type CommandRootProps = ArkDialog.RootProps;
const CommandRoot = ArkDialog.Root;
const CommandBackdrop = ArkDialog.Backdrop;

export type CommandPositionerProps = ArkDialog.RootProps & CommandVariantProps;
const CommandPositioner = forwardRef<HTMLDivElement, CommandPositionerProps>(
  (props, ref) => {
    const [variantProps, rest] = command.splitVariantProps(props);
    const classes = command(variantProps);

    return <ArkDialog.Positioner {...rest} ref={ref} className={classes} />;
  },
);

const CommandContent = ArkDialog.Content;
const CommandTitle = ArkDialog.Title;
const CommandDescription = ArkDialog.Description;
const CommandCloseTrigger = ArkDialog.CloseTrigger;

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
