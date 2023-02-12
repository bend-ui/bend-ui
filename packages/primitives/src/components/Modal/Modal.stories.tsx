import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useDisclosure } from '../../hooks';
import { Modal } from './';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

type Story = ComponentStory<typeof Modal>;

export const Base: Story = (args) => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <div>
      <button onClick={toggle}>Open modal</button>

      <Modal.Root {...args} isOpen={isOpen} onClose={toggle}>
        <Modal.Dialog>
          <Modal.Content>
            {/* Modal Header */}
            <div>
              <h3>Terms of Service</h3>
              <Modal.Dismiss />
            </div>
            {/* Modal body */}
            <div>
              <p>
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p>
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            {/* Modal footer */}
            <div>
              <button type="button" onClick={toggle}>
                I accept
              </button>
              <button type="button" onClick={toggle}>
                Decline
              </button>
            </div>
          </Modal.Content>
        </Modal.Dialog>
      </Modal.Root>
    </div>
  );
};
