import React from 'react';
import { Button } from '../../components/Button';
import { useToggle } from './useToggle';

export default {
  title: 'Hooks/useToggle',
  component: useToggle,
};

export const Usage = () => {
  const [value, toggle] = useToggle();

  return <Button onClick={toggle}>{value ? 'ON' : 'OFF'}</Button>;
};
