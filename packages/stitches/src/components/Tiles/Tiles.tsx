import { createComponent } from '@particles/primitives';
import clsx from 'clsx';
import { Box } from '../Box';
import useStyles, { TilesStylesParams } from './Tiles.styles';

export interface TilesProps extends TilesStylesParams {
  children?: React.ReactNode;
}

const Tiles = (props: TilesProps) => {
  const { children, columns = 3, ...rest } = props;
  const { styles } = useStyles({ columns });
  return (
    <Box className={clsx(styles['root'])} {...rest}>
      {children}
    </Box>
  );
};

Tiles.displayName = 'Tiles';

export interface TilesColProps {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
}

const Col = (props: TilesColProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

Col.displayName = 'Tiles.Col';

export default createComponent(Tiles, { Col });
