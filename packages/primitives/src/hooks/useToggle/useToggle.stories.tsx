import { useToggle } from './useToggle';

export default {
  title: 'Hooks/useToggle',
  component: useToggle,
};

export const Usage = () => {
  const [value, toggle] = useToggle();

  return <button onClick={toggle}>{value ? 'ON' : 'OFF'}</button>;
};
