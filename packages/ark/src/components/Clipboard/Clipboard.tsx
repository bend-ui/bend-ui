import { Clipboard as ClipboardPrimitive } from '@ark-ui/react';
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react';

const Component = () => {
  return (
    <ClipboardPrimitive.Root value="https://ark-ui.com">
      <ClipboardPrimitive.Label>Copy this link</ClipboardPrimitive.Label>
      <ClipboardPrimitive.Control>
        <ClipboardPrimitive.Input />
        <ClipboardPrimitive.Trigger>
          <ClipboardPrimitive.Indicator copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </ClipboardPrimitive.Indicator>
        </ClipboardPrimitive.Trigger>
      </ClipboardPrimitive.Control>
    </ClipboardPrimitive.Root>
  );
};

export const Clipboard = Object.assign(Component, {
  Root: ClipboardPrimitive.Root,
  Label: ClipboardPrimitive.Label,
  Control: ClipboardPrimitive.Control,
  Input: ClipboardPrimitive.Input,
  Trigger: ClipboardPrimitive.Trigger,
  Indicator: ClipboardPrimitive.Indicator,
});
