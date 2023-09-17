import { createComponent, forwardRef } from '../../utils';
import type { ImageProps } from './types';

const Root = forwardRef<'img', ImageProps>((props, ref) => {
  const { as: Component = 'img', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export default createComponent(Root, {});
