import { Toggle as TogglePrimitive } from '@ark-ui/react';
import { BoldIcon } from 'lucide-react';

const Component = () => {
  return (
    <TogglePrimitive.Root>
      <BoldIcon />
    </TogglePrimitive.Root>
  );
};

export const Toggle = Object.assign(Component, {
  Root: TogglePrimitive.Root,
});
