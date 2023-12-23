import { Button } from '../../components/Button';
import { useCycle } from './useCycle';

export default {
  title: 'Hooks/useCycle',
  component: useCycle,
};

export const Usage = () => {
  const [value, cycle] = useCycle({
    initialValue: 'blue',
    values: ['blue', 'orange', 'red'],
  });

  return <Button onClick={cycle}>{value}</Button>;
};
