import { createComponent, forwardRef } from '../../utils';
import { VisuallyHidden } from '../VisuallyHidden';
import { useSwitchContext } from './SwitchContext';
import type { ChangeEvent, ReactNode } from 'react';

export type SwitchRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<SwitchRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const context = useSwitchContext();
  return (
    <Component ref={ref} data-state={context.state} {...rest}>
      {children}
    </Component>
  );
});

export type SwitchInputProps = {
  children?: ReactNode;
};

const Input = forwardRef<SwitchInputProps, 'input'>((props, ref) => {
  const { ...rest } = props;

  const context = useSwitchContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    context.onCheckedChange(event.target.checked);
  };

  return (
    <VisuallyHidden>
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        checked={context.isChecked}
        disabled={context.isDisabled}
        onChange={handleChange}
        name=""
        id=""
        {...rest}
      />
    </VisuallyHidden>
  );
});

export type SwitchTrackProps = {
  children?: ReactNode;
};

const Track = forwardRef<SwitchTrackProps, 'span'>((props, ref) => {
  const { as: Component = 'span', ...rest } = props;
  const context = useSwitchContext();

  return <Component ref={ref} data-state={context.state} {...rest} />;
});

export type SwitchThumbProps = {
  children?: ReactNode;
};

const Thumb = forwardRef<SwitchThumbProps, 'span'>((props, ref) => {
  const { as: Component = 'span', ...rest } = props;
  const context = useSwitchContext();

  return <Component ref={ref} data-state={context.state} {...rest} />;
});

export default createComponent(Root, { Root, Input, Track, Thumb }, 'Switch');
