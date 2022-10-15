import { useToggle } from "../useToggle";

export const useDisclosure = () => {
  const [isOpen, toggle] = useToggle();

  return {
    isOpen,
    toggle,
  };
};
