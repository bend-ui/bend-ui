import { createComponent, forwardRef } from '../../utils';

export type ButtonProps = {
  children?: React.ReactNode;
};

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Button);
