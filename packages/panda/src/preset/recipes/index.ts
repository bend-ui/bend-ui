import { textFieldRecipe } from './textField';
import { buttonRecipe } from './button';
import { modalRecipe } from './modal';
import { cardRecipe } from './card';
import { tabsRecipe } from './tabs';
import { appShellRecipe } from './appShell';
import { selectRecipe } from './select';
import { textRecipe } from './text';
import { avatarRecipe } from './avatar';

export const slotRecipes = {
  text: textRecipe,
  button: buttonRecipe,
  textField: textFieldRecipe,
  select: selectRecipe,
  card: cardRecipe,
  modal: modalRecipe,
  tabs: tabsRecipe,
  appShell: appShellRecipe,
  avatar: avatarRecipe,
};
