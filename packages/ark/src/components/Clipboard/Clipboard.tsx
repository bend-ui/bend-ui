import { Clipboard as ClipboardPrimitive } from '@ark-ui/react';
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react';

import { withRecipe, withParts } from '../../utils';
import { Assign, HTMLStyledProps } from '@particles/styled-system/types';
import { clipboard } from '@particles/styled-system/recipes';

export type ClipboardRootProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.RootProps
>;
const ClipboardRoot = withRecipe<ClipboardRootProps>(
  ClipboardPrimitive.Root,
  clipboard,
  'root',
);

export type ClipboardLabelProps = Assign<
  HTMLStyledProps<'label'>,
  ClipboardPrimitive.LabelProps
>;
const ClipboardLabel = withParts<ClipboardLabelProps>(
  ClipboardPrimitive.Label,
  'label',
);

export type ClipboardControlProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.ControlProps
>;
const ClipboardControl = withParts<ClipboardControlProps>(
  ClipboardPrimitive.Control,
  'control',
);

export type ClipboardInputProps = Assign<
  HTMLStyledProps<'input'>,
  ClipboardPrimitive.InputProps
>;
const ClipboardInput = withParts<ClipboardInputProps>(
  ClipboardPrimitive.Input,
  'input',
);

export type ClipboardTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  ClipboardPrimitive.TriggerProps
>;
const ClipboardTrigger = withParts<ClipboardTriggerProps>(
  ClipboardPrimitive.Trigger,
  'trigger',
);

export type ClipboardIndicatorProps = Assign<
  HTMLStyledProps<'div'>,
  ClipboardPrimitive.IndicatorProps
>;
const ClipboardIndicator = withParts<ClipboardIndicatorProps>(
  ClipboardPrimitive.Indicator,
  'indicator',
);

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
