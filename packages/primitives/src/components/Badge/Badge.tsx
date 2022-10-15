import React from 'react';
import { forwardRef } from '../../utils';

type BadgeComponents = {
  Root: React.ElementType;
  Inner: React.ElementType;
};

interface BadgeProps {
  components?: BadgeComponents;
}

export const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const { children, components, ...rest } = props;
  const Root = components?.Root || 'div';
  const Inner = components?.Inner || 'span';
  return (
    <Root ref={ref} {...rest}>
      <Inner>{children}</Inner>
    </Root>
  );
});
