import { createComponent, forwardRef } from '../../utils';

export type AlertProps = React.ComponentPropsWithoutRef<'div'>;

const Alert = forwardRef<AlertProps, 'div'>((props, ref) => (
  <div ref={ref} role="alert" {...props} />
));

export default createComponent(Alert);
