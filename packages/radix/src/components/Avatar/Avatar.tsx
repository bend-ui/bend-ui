import { Avatar as AvatarPrimitive } from 'radix-ui';
import { styled } from '@particles/styled-system/jsx';
import { avatar } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(avatar);

const Root = withProvider(styled(AvatarPrimitive.Root), 'root');

const Image = withContext(styled(AvatarPrimitive.Image), 'image');

const Fallback = withContext(styled(AvatarPrimitive.Fallback), 'fallback');

export const Avatar = Object.assign(Root, { Root, Image, Fallback });
