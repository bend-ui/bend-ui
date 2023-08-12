import {
  Avatar as AvatarPrimitive,
  createPolymorphicComponent,
} from '@particles/primitives';
import type { ReactNode } from 'react';

interface AvatarProps {
  children?: ReactNode;
}

const Root = (props: AvatarProps) => {
  const { children } = props;
  return <AvatarPrimitive.Root>{children}</AvatarPrimitive.Root>;
};

interface AvatarImageProps {
  children?: never;
}

const AvatarImage = (props: AvatarImageProps) => {
  const { ...rest } = props;
  return <AvatarPrimitive.Image {...rest} />;
};

interface AvatarFallbackProps {
  children?: never;
}

const AvatarFallback = (props: AvatarFallbackProps) => {
  const { ...rest } = props;
  return <AvatarPrimitive.Fallback {...rest} />;
};

export const Avatar = createPolymorphicComponent(Root);

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;
