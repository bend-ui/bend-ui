import { accordionRecipe } from './accordion';
import { alertRecipe } from './alert';
import { appShellRecipe } from './app-shell';
import { avatarRecipe } from './avatar';
import { badgeRecipe } from './badge';
import { breadcrumbsRecipe } from './breadcrumbs';
import { buttonGroupRecipe } from './button-group';
import { buttonRecipe } from './button';
import { cardRecipe, cardSectionRecipe } from './card';
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
import { selectDropdownRecipe, selectRecipe } from './select';
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
import { overlayRecipe } from './overlay';
import { angleSliderRecipe } from './angle-slider';
import { datePickerRecipe } from './date-picker';
import { clipboardRecipe } from './clipboard';
import { toggleGroupRecipe } from './toggle-group';
import { sidebarRecipe } from './sidebar';
import { hoverCard } from './hover-card';
import { meter } from './meter';
import { scrollArea } from './scroll-area';
import { navbarRecipe } from './navbar';

export const slotRecipes: Theme['slotRecipes'] = {
  // divider: dividerRecipe,
  accordion: accordionRecipe,
  alert: alertRecipe,
  alertDialog: modalRecipe,
  angleSlider: angleSliderRecipe,
  appShell: appShellRecipe,
  avatar: avatarRecipe,
  badge: badgeRecipe,
  breadcrumbs: breadcrumbsRecipe,
  button: buttonRecipe,
  buttonGroup: buttonGroupRecipe,
  carousel: carouselRecipe,
  checkbox: checkboxRecipe,
  clipboard: clipboardRecipe,
  combobox: comboboxRecipe,
  command: commandRecipe,
  datePicker: datePickerRecipe,
  dialog: dialogRecipe,
  drawer: drawerRecipe,
  formField: formFieldRecipe,
  hoverCard,
  indicator: indicatorRecipe,
  input: inputRecipe,
  menu: menuRecipe,
  modal: modalRecipe,
  nav: navRecipe,
  pagination: paginationRecipe,
  popover: popoverRecipe,
  radioGroup: radioGroupRecipe,
  rating: ratingRecipe,
  select: selectRecipe,
  selectDropdown: selectDropdownRecipe,
  table: tableRecipe,
  tag: tagRecipe,
  tagsInput: tagsInputRecipe,
  textarea: textareaRecipe,
  toast: toastRecipe,
  tooltip: tooltipRecipe,
  meter: meter,
  tabs: tabsRecipe,
  toggleGroup: toggleGroupRecipe,
  scrollArea: scrollArea,
  sidebar: sidebarRecipe,
  switchRecipe: switchRecipe,
  card: cardRecipe,
  navbar: navbarRecipe,
};

export const recipes: Theme['recipes'] = {
  backdrop: backdropRecipe,
  cardSection: cardSectionRecipe,
  icon: iconRecipe,
  overlay: overlayRecipe,
  text: textRecipe,
};
