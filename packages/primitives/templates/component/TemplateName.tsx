import { createComponent, forwardRef } from '../../src/utils';
import type { ReactNode } from 'react';

export interface TemplateNameRootProps {
  children?: ReactNode;
}

const Root = forwardRef<TemplateNameRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'TemplateName');
