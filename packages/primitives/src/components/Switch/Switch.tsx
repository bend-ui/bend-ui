import { createComponent, forwardRef } from '../../utils';
import { VisuallyHidden } from '../VisuallyHidden';
import { SwitchProvider, useSwitchContext } from './SwitchContext';
import { useSwitch } from './useSwitch';
import type { UseSwitchProps } from './useSwitch';
import type { ChangeEvent, ReactNode } from 'react';

export type SwitchRootProps = UseSwitchProps & {
  children?: ReactNode;
};

const Root = forwardRef<SwitchRootProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    defaultChecked,
    isChecked,
    onCheckedChange,
    isDisabled,
    id,
    ...rest
  } = props;

  const context = useSwitch({
    defaultChecked,
    isChecked,
    onCheckedChange,
    isDisabled,
    id,
  });

  return (
    <SwitchProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </SwitchProvider>
  );
});

export interface SwitchInputProps {
  children?: never;
}

const SwitchInput = forwardRef<SwitchInputProps, 'input'>((props, ref) => {
  const { ...rest } = props;

  const context = useSwitchContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    context.onCheckedChange(event.target.checked);
  };

  return (
    <VisuallyHidden>
      <input
        ref={ref}
        checked={context.isChecked}
        disabled={context.isDisabled}
        id=""
        name=""
        onChange={handleChange}
        role="switch"
        type="checkbox"
        {...rest}
      />
    </VisuallyHidden>
  );
});

export interface SwitchTrackProps {
  children?: ReactNode;
}

const Track = forwardRef<SwitchTrackProps, 'label'>((props, ref) => {
  const { as: Component = 'label', ...rest } = props;
  const context = useSwitchContext();

  return <Component ref={ref} {...context.getLabelProps()} {...rest} />;
});

export interface SwitchThumbProps {
  children?: ReactNode;
}

const Thumb = forwardRef<SwitchThumbProps, 'span'>((props, ref) => {
  const { as: Component = 'span', ...rest } = props;
  const context = useSwitchContext();

  return <Component ref={ref} data-state={context.state} {...rest} />;
});

export default createComponent(
  Root,
  { Root, Input: SwitchInput, Track, Thumb },
  'Switch'
);
