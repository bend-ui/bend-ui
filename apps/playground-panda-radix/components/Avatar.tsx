import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { avatar } from '@particles/panda-system/recipes';

import { createStyleContext } from './style-context';

const { withProvider, withContext } = createStyleContext(avatar);

const Root = withProvider(AvatarPrimitive.Root, 'root');

const Image = withContext(AvatarPrimitive.Image, 'image');

const Fallback = withContext(AvatarPrimitive.Root, 'fallback');

export default Object.assign(Root, { Root, Image, Fallback });
