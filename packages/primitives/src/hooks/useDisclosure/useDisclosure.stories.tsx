import { useDisclosure } from './useDisclosure';

export default {
  title: 'Hooks/useDisclosure',
  component: useDisclosure,
};

export const Usage = () => {
  const [isOpen, handlers] = useDisclosure();

  return <button onClick={handlers.toggle}>{isOpen ? 'Open' : 'Close'}</button>;
};
