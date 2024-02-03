import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@particles/styled-system/jsx';
import { avatar } from '@particles/styled-system/recipes';
import { createComponent } from '@particles/primitives';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(avatar);

const Root = withProvider(styled(AvatarPrimitive.Root), 'root');

const Image = withContext(styled(AvatarPrimitive.Image), 'image');

const Fallback = withContext(styled(AvatarPrimitive.Fallback), 'fallback');

export const Avatar = createComponent(Root, { Root, Image, Fallback });
