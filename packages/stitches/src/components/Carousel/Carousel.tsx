import { Box } from '../Box';

export interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  return (
    <Box>
      <Box>
        <button>Stop</button>
        <button>Previous</button>
        <button>Next</button>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Object.assign(Carousel, {});
