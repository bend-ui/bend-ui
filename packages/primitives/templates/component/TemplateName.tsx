import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../src/utils';

export type TemplateNameRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<TemplateNameRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'TemplateName');
