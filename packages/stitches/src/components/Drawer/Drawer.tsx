import { Portal } from '@particles/primitives';
import clsx from 'clsx';
import { Box } from '../Box';
import { Transition } from '../Transition';
import useStyles from './Drawer.styles';

export interface DrawerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?(): void;
}

const Drawer = (props: DrawerProps) => {
  const { children, isOpen, onClose } = props;
  const { styles } = useStyles();

  const handleBackdropClick = () => {
    onClose?.();
  };

  return (
    <Portal>
      <Transition isMounted={isOpen}>
        {(transitionStyles) => (
          <Box className={clsx(styles.backdrop)} onClick={handleBackdropClick}>
            <Box style={transitionStyles} className={clsx(styles.panel)}>
              {children}
            </Box>
          </Box>
        )}
      </Transition>
    </Portal>
  );
};

export default Object.assign(Drawer, {});
