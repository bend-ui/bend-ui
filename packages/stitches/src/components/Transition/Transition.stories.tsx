import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import { Panel } from '../Panel';
import Transition from './Transition';
import type { Meta } from '@storybook/react';

export default {
  component: Transition,
} as Meta<typeof Transition>;

export const Default = () => {
  const { isOpen, toggle } = useDisclosure();
  return (
    <>
      <Button onClick={toggle}>Toggle</Button>
      <Transition isMounted={isOpen}>
        {(transitionStyles) => (
          <Panel style={transitionStyles}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            beatae ut ad animi perspiciatis culpa vel ipsum reiciendis soluta
            deleniti, quae odio delectus maiores minus expedita nulla?
            Assumenda, consequatur eos.
          </Panel>
        )}
      </Transition>
    </>
  );
};

export const Multiple = () => {
  const { isOpen, toggle } = useDisclosure();
  return (
    <>
      <Button onClick={toggle}>Toggle</Button>
      <Transition
        transition={{
          panel: 'fade',
          button: 'slide-up',
        }}
        isMounted={isOpen}
      >
        {(transitionStyles) => (
          <>
            <Panel style={transitionStyles['panel']}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              beatae ut ad animi perspiciatis culpa vel ipsum reiciendis soluta
              deleniti, quae odio delectus maiores minus expedita nulla?
              Assumenda, consequatur eos.
            </Panel>
            <Panel style={transitionStyles['button']}>Panel 2</Panel>
          </>
        )}
      </Transition>
    </>
  );
};
