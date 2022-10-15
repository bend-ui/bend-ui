import { Box } from "../Box"

export interface RatingProps {
  children?: React.ReactNode
}

const Rating = (props: RatingProps) => {
  const { children } = props;
  return (
    <Box>{children}</Box>
  )
}

export default Object.assign(Rating, {})
