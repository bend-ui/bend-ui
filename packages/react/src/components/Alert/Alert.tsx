import { alert } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import type { AlertProps } from './Alert.types';
import type { ReactNode } from 'react';
import { particles } from '../factory';

const Root = styled('div', alert);

const Icon = particles.div;

const Title = particles.div;

const Content = particles.div;

const Footer = particles.div;

const Component = (
  props: AlertProps & {
    icon?: ReactNode;
    title?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
  },
) => {
  const { icon, title, children, footer, ...rest } = props;
  return (
    <Alert.Root {...rest}>
      {!!icon && <Alert.Icon>{icon}</Alert.Icon>}
      {!!title && <Alert.Title>{title}</Alert.Title>}
      {!!children && <Alert.Content>{children}</Alert.Content>}
      {!!footer && <Alert.Footer>{footer}</Alert.Footer>}
    </Alert.Root>
  );
};

export const Alert = Object.assign(Component, {
  Root,
  Icon,
  Title,
  Content,
  Footer,
});
