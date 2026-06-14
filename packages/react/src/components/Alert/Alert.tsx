'use client';

import { alert } from '@bend-ui/styled-system/recipes';
import type { AlertProps } from './Alert.types';
import { bend } from '../factory';
import { withParts, withRecipe } from '../../utils';

const Root = withRecipe(bend.div, alert, 'root');

const Icon = withParts(bend.div, 'icon');

const Title = withParts(bend.div, 'title');

const Content = withParts(bend.div, 'content');

const Footer = withParts(bend.div, 'footer');

const Dismiss = withParts(bend.button, 'dismiss');

const Component = (props: AlertProps) => {
  const { ref, icon, title, children, footer, onDismiss, ...rest } = props;
  return (
    <Alert.Root ref={ref} {...rest}>
      {!!icon && <Alert.Icon>{icon}</Alert.Icon>}
      {!!title && <Alert.Title>{title}</Alert.Title>}
      {!!children && <Alert.Content>{children}</Alert.Content>}
      {!!footer && <Alert.Footer>{footer}</Alert.Footer>}
      {!!onDismiss && (
        <Alert.Dismiss onClick={onDismiss}>&times;</Alert.Dismiss>
      )}
    </Alert.Root>
  );
};

export const Alert = Object.assign(Component, {
  Root,
  Icon,
  Title,
  Content,
  Footer,
  Dismiss,
});
