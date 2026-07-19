import { Clipboard as ClipboardPrimitive } from '@ark-ui/react';
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react';

import { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';
import { clipboard } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(clipboard);

export type ClipboardRootProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.RootProps
>;
const ClipboardRoot = withProvider(ClipboardPrimitive.Root, 'root');

export type ClipboardLabelProps = Assign<
  HTMLStyledProps<'label'>,
  ClipboardPrimitive.LabelProps
>;
const ClipboardLabel = withContext(ClipboardPrimitive.Label, 'label');

export type ClipboardControlProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.ControlProps
>;
const ClipboardControl = withContext(ClipboardPrimitive.Control, 'control');

export type ClipboardInputProps = Assign<
  HTMLStyledProps<'input'>,
  ClipboardPrimitive.InputProps
>;
const ClipboardInput = withContext(ClipboardPrimitive.Input, 'input');

export type ClipboardTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ClipboardPrimitive.TriggerProps
>;
const ClipboardTrigger = withContext(ClipboardPrimitive.Trigger, 'trigger');

export type ClipboardIndicatorProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.IndicatorProps
>;
const ClipboardIndicator = withContext(ClipboardPrimitive.Indicator, 'indicator');

export type ClipboardProps = ClipboardRootProps;

const ClipboardComponent = (props: ClipboardProps) => {
  return (
    <ClipboardRoot {...props}>
      <ClipboardLabel>Copy this link</ClipboardLabel>
      <ClipboardControl>
        <ClipboardInput />
        <ClipboardTrigger>
          <ClipboardIndicator copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </ClipboardIndicator>
        </ClipboardTrigger>
      </ClipboardControl>
    </ClipboardRoot>
  );
};

export const Clipboard = Object.assign(ClipboardComponent, {
  Root: ClipboardRoot,
  Label: ClipboardLabel,
  Control: ClipboardControl,
  Input: ClipboardInput,
  Trigger: ClipboardTrigger,
  Indicator: ClipboardIndicator,
}) as unknown as typeof ClipboardPrimitive;
