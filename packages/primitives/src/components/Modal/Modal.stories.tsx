import React from 'react';
import { Meta } from '@storybook/react';
import { FloatingOverlay } from '@floating-ui/react-dom-interactions';
import { useDisclosure } from '../../hooks';
import { Portal } from '../Portal';
import { useModal } from './useModal';

export default {
  title: 'Components/Modal',
} as Meta;

export const Base = () => {
  const { isOpen, toggle } = useDisclosure();

  const { getReferenceProps, reference, getFloatingProps, floating } = useModal(
    { isOpen }
  );

  return (
    <div>
      <button {...getReferenceProps({ ref: reference, onClick: toggle })}>
        Open modal
      </button>
      <Portal>
        {isOpen && (
          <FloatingOverlay
            style={{
              display: 'grid',
              placeItems: 'center',
              background: 'rgba(25, 25, 25, 0.8)',
            }}
          >
            <div {...getFloatingProps({ ref: floating })}>
              <h3>Join our Newsletter</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit asperiores molestiae ex.
              </p>
              <input aria-label="Email" type="email" placeholder="Email" />
              <button>Subscribe</button>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                molestias hic voluptatibus.
              </p>
            </div>
          </FloatingOverlay>
        )}
      </Portal>
    </div>
  );
};
