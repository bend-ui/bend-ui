import { createComponent, forwardRef } from '../../utils';
import type { ImageProps } from './types';

const Root = forwardRef<ImageProps, 'img'>((props, ref) => {
  const { as: Component = 'img', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export default createComponent(Root, {}, 'Image');
