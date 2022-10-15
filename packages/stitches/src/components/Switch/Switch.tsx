import { Box } from "../Box"

export interface CarouselProps {
  children?: React.ReactNode
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  return (
    <Box>{children}</Box>
  )
}

export default Object.assign(Carousel, {})
