import { alert } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { createStyleContext } from '../../utils/create-style-context';
import type { AlertProps } from './Alert.types';
import type { ReactNode } from 'react';

const { withProvider, withContext } = createStyleContext(alert);

const Root = withProvider(styled.div, 'root');

const Icon = withContext(styled.div, 'icon');

const Title = withContext(styled.div, 'title');

const Content = withContext(styled.div, 'content');

const Footer = withContext(styled.div, 'footer');

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
