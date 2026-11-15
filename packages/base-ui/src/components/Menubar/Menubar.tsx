import { Menubar as MenubarPrimitive } from '@base-ui/react/menubar';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { menubar } from '@bend-ui/styled-system/recipes';

const { withProvider } = createSlotRecipeContext(menubar);

const MenubarRoot = withProvider(MenubarPrimitive, 'root');

export const Menubar = Object.assign(MenubarRoot, {
  Root: MenubarRoot,
});
