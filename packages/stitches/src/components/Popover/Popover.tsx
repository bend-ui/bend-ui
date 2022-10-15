import { cloneElement, isValidElement } from 'react';
import clsx from 'clsx';
import {
  findChildrenByType,
  forwardRef,
  Portal,
  runIfFn,
} from '@particles/primitives';
import { SXProp } from '../../styles';
import { Button, ButtonProps } from '../Button';
import { Transition } from '../Transition';
import { Panel, PanelProps } from '../Panel';
import useStyles from './Popover.styles';
import { PopoverPlacement, usePopover } from './usePopover';

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
} & SXProp;

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
