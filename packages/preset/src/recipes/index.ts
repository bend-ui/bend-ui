import { accordionRecipe } from './accordion';
import { alertRecipe } from './alert';
import { appShellRecipe } from './app-shell';
import { avatarRecipe } from './avatar';
import { badgeRecipe } from './badge';
import { breadcrumbsRecipe } from './breadcrumbs';
import { buttonGroupRecipe } from './button-group';
import { buttonRecipe } from './button';
import { cardRecipe } from './card';
import { carouselRecipe } from './carousel';
import { checkboxRecipe } from './checkbox';
import { tagsInputRecipe } from './tags-input';
// import { dividerRecipe } from './divider';
import { drawerRecipe } from './drawer';
import { menuRecipe } from './menu';
import { formFieldRecipe } from './formField';
import { iconRecipe } from './icon';
import { indicatorRecipe } from './indicator';
import { inputRecipe } from './input';
import { modalRecipe } from './modal';
import { navRecipe } from './nav';
import { paginationRecipe } from './pagination';
import { popoverRecipe } from './popover';
import { radioGroupRecipe } from './radio-group';
import { ratingRecipe } from './rating';
import { selectRecipe } from './select';
import { switchRecipe } from './switch';
import { tableRecipe } from './table';
import { tabsRecipe } from './tabs';
import { tagRecipe } from './tag';
import { textRecipe } from './text';
import { textareaRecipe } from './textarea';
import { toastRecipe } from './toast';
import { tooltipRecipe } from './tooltip';
import { comboboxRecipe } from './combobox';
import { Theme } from '@pandacss/types';
import { dialogRecipe } from './dialog';
import { backdropRecipe } from './backdrop';
import { commandRecipe } from './command';

export const slotRecipes: Theme['slotRecipes'] = {
  alert: alertRecipe,
  badge: badgeRecipe,
  breadcrumbs: breadcrumbsRecipe,
  button: buttonRecipe,
  card: cardRecipe,
  carousel: carouselRecipe,
  tagsInput: tagsInputRecipe,
  // divider: dividerRecipe,
  indicator: indicatorRecipe,
  modal: modalRecipe,
  nav: navRecipe,
  pagination: paginationRecipe,
  radioGroup: radioGroupRecipe,
  rating: ratingRecipe,
  switchRecipe: switchRecipe,
  table: tableRecipe,
  textarea: textareaRecipe,
  tag: tagRecipe,
};

export const recipes: Theme['recipes'] = {
  appShell: appShellRecipe,
  avatar: avatarRecipe,
  buttonGroup: buttonGroupRecipe,
  text: textRecipe,
  icon: iconRecipe,
  combobox: comboboxRecipe,
  tabs: tabsRecipe,
  checkbox: checkboxRecipe,
  dialog: dialogRecipe,
  backdrop: backdropRecipe,
  drawer: drawerRecipe,
  popover: popoverRecipe,
  toast: toastRecipe,
  menu: menuRecipe,
  accordion: accordionRecipe,
  tooltip: tooltipRecipe,
  formField: formFieldRecipe,
  select: selectRecipe,
  command: commandRecipe,
  input: inputRecipe,
};
