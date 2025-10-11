import { alert } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import type { AlertProps } from './Alert.types';
import type { ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';

const Root = styled('div', alert);

const Icon = (props: HTMLParticlesProps<'div'>) => {
  return <particles.div data-part="icon" {...props} />;
};

const Title = (props: HTMLParticlesProps<'div'>) => {
  return <particles.div data-part="title" {...props} />;
};

const Content = (props: HTMLParticlesProps<'div'>) => {
  return <particles.div data-part="content" {...props} />;
};

const Footer = (props: HTMLParticlesProps<'div'>) => {
  return <particles.div data-part="footer" {...props} />;
};

const Dismiss = (props: HTMLParticlesProps<'button'>) => {
  return <particles.button data-part="dismiss" {...props} />;
};

const Component = (props: AlertProps) => {
  const { icon, title, children, footer, onDismiss, ...rest } = props;
  return (
    <Alert.Root {...rest}>
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
