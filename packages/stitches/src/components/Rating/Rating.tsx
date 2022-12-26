import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../styles';
import { Box } from '../Box';

export interface RatingProps {
  count?: number;
  defaultValue?: number;
  value?: number;
}

const Rating = forwardRef<RatingProps, 'div'>((props, ref) => {
  const { as = 'div', count = 5 } = useDefaultProps('Rating', props);
  return (
    <Box as={as} ref={ref}>
      {[...Array(count).fill(true)].map((item, index) => (
        <>
          <input
            type="radio"
            name={`particles-rating`}
            id={`particles-rating-${index}`}
            value={index}
          />
          <label htmlFor={`particles-rating-${index}`}>{index}</label>
        </>
      ))}
    </Box>
  );
});

export default createComponent(Rating, {});
