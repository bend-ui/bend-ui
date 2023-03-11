import { cloneElement, isValidElement } from 'react';
import clsx from 'clsx';
import {
  findChildrenByType,
  forwardRef,
  Portal,
  runIfFn,
} from '@particles/primitives';
import { Button } from '../Button';
import { Transition } from '../Transition';
import { Panel } from '../Panel';
import useStyles from './Popover.styles';
import { usePopover } from './usePopover';
import type { PopoverPlacement } from './usePopover';
import type { PanelProps } from '../Panel';
import type { ButtonProps } from '../Button';
import type { DefaultComponentProps } from '../../styles';

type PopoverPanelProps = {
  children?:
    | React.ReactNode
    | ((data: { isOpen(): void; onClose(): void }) => React.ReactNode);
} & PanelProps;

const PopoverPanel = forwardRef<PopoverPanelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Panel ref={ref} {...rest}>
      {runIfFn(children, {
        onClose: () => alert('onClose'),
        isOpen: () => alert('isOpen'),
      })}
    </Panel>
  );
});

// PopoverPanel.displayName = 'Popover.Panel';

const PopoverButton = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Button ref={ref} {...rest}>
      {children}
    </Button>
  );
});

// PopoverButton.displayName = 'Popover.Button';

export type PopoverProps = {
  placement?: PopoverPlacement;
  isOpen?: boolean;
  children: React.ReactNode;
} & DefaultComponentProps;

const Popover = (props: PopoverProps) => {
  const { children, placement = 'bottom' } = props;
  const { styles } = useStyles();
  const { isOpen, getAnchorProps, getPopoverProps } = usePopover({
    placement,
  });

  const button = findChildrenByType(children, PopoverButton);
  const panel = findChildrenByType(children, PopoverPanel);

  return (
    <>
      {isValidElement(button) && cloneElement(button, { ...getAnchorProps })}
      <Portal>
        <Transition isMounted={isOpen}>
          {(transitionStyles) =>
            isValidElement(panel) &&
            cloneElement(panel, {
              className: clsx(styles.root),
              ...getPopoverProps({ style: transitionStyles }),
            })
          }
        </Transition>
      </Portal>
    </>
  );
};

export default Object.assign(Popover, {
  Button: PopoverButton,
  Panel: PopoverPanel,
});
