import { accordionRecipe } from './accordion';
import { alertRecipe } from './alert';
import { appShellRecipe } from './app-shell';
import { avatarRecipe } from './avatar';
import { badgeRecipe } from './badge';
import { breadcrumbsRecipe } from './breadcrumbs';
import { buttonRecipe } from './button';
import { cardRecipe } from './card';
import { carouselRecipe } from './carousel';
import { checkboxRecipe } from './checkbox';
import { tagsInputRecipe } from './tags-input';
// import { dividerRecipe } from './divider';
import { drawerRecipe } from './drawer';
import { dropdownMenuRecipe } from './dropdownMenu';
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

export const slotRecipes = {
  accordion: accordionRecipe,
  alert: alertRecipe,
  appShell: appShellRecipe,
  badge: badgeRecipe,
  breadcrumbs: breadcrumbsRecipe,
  button: buttonRecipe,
  card: cardRecipe,
  carousel: carouselRecipe,
  checkbox: checkboxRecipe,
  tagsInput: tagsInputRecipe,
  // divider: dividerRecipe,
  drawer: drawerRecipe,
  dropdownMenu: dropdownMenuRecipe,
  formField: formFieldRecipe,
  indicator: indicatorRecipe,
  input: inputRecipe,
  modal: modalRecipe,
  nav: navRecipe,
  pagination: paginationRecipe,
  popover: popoverRecipe,
  radioGroup: radioGroupRecipe,
  rating: ratingRecipe,
  select: selectRecipe,
  switchRecipe: switchRecipe,
  table: tableRecipe,
  tabs: tabsRecipe,
  textarea: textareaRecipe,
  toast: toastRecipe,
  tooltip: tooltipRecipe,
  tag: tagRecipe,
};

export const recipes = {
  avatar: avatarRecipe,
  text: textRecipe,
  icon: iconRecipe,
  combobox: comboboxRecipe,
};
