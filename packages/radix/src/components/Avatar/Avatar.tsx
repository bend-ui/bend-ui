import { Avatar as AvatarPrimitive } from 'radix-ui';
import { styled } from '@bend-ui/styled-system/jsx';
import { avatar } from '@bend-ui/styled-system/recipes';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(avatar);

const Root = withProvider(styled(AvatarPrimitive.Root), 'root');

const Image = withPart(styled(AvatarPrimitive.Image), 'image');

const Fallback = withPart(styled(AvatarPrimitive.Fallback), 'fallback');

export const Avatar = Object.assign(Root, { Root, Image, Fallback });
