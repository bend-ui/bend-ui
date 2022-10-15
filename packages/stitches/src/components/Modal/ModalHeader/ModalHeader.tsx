import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../../Box';
import { DismissButton } from '../../Button';
import { Level } from '../../Level';
import useStyles from './ModalHeader.styles';

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

export const ModalHeader = forwardRef<ModalHeaderProps, 'div'>((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();
  return (
    <Box className={clsx(styles.root)} ref={ref}>
      <Level>
        <Box>{children}</Box>
        <DismissButton />
      </Level>
    </Box>
  );
});
