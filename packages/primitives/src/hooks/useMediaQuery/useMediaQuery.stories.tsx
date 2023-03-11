import { useMediaQuery } from './useMediaQuery';

export default {
  title: 'Hooks/useMediaQuery',
  component: useMediaQuery,
};

export const Base = () => {
  const [match, match2] = useMediaQuery([
    '(min-width: 576px)',
    '(min-width: 1576px)',
  ]);

  console.log(match);

  return (
    <>
      <span>Match &quot;(min-width: 576px)&quot; {match ? 'yes' : 'no'} </span>
      <span>
        Match &quot;(min-width: 1576px)&quot; {match2 ? 'yes' : 'no'}{' '}
      </span>
    </>
  );
};
