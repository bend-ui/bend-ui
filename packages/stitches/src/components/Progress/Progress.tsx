import { Box } from "../Box"

export interface ProgressProps {
  children?: React.ReactNode
}

const Progress = (props: ProgressProps) => {
  const { children } = props;
  return (
    <Box>{children}</Box>
  )
}

export default Object.assign(Progress, {})
