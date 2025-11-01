'use client';

import { alert } from '@particles/styled-system/recipes';
import type { AlertProps } from './Alert.types';
import { particles } from '../factory';
import { withParts, withRecipe } from '../../utils';
import { forwardRef } from 'react';

const Root = withRecipe(particles.div, alert, 'root');

const Icon = withParts(particles.div, 'icon');

const Title = withParts(particles.div, 'title');

const Content = withParts(particles.div, 'content');

const Footer = withParts(particles.div, 'footer');

const Dismiss = withParts(particles.button, 'dismiss');

const Component = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { icon, title, children, footer, onDismiss, ...rest } = props;
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
});

export const Alert = Object.assign(Component, {
  Root,
  Icon,
  Title,
  Content,
  Footer,
  Dismiss,
});
