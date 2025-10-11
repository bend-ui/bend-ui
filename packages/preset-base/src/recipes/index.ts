import { Theme } from '@pandacss/types';
import { accordion } from './accordion';
import { actionBar } from './action-bar';
import { alert } from './alert';
import { badge } from './badge';
import { breadcrumb } from './breadcrumb';
import { button } from './button';
import { buttonGroup } from './button-group';
import { card } from './card';
import { carousel } from './carousel';
import { checkbox } from './checkbox';
import { collapsible } from './collapsible';
import { combobox } from './combobox';
import { drawer } from './drawer';
import { hoverCard } from './hover-card';
import { inputRecipe } from './input';
import { menu } from './menu';
import { numberInput } from './number-input';
import { pagination } from './pagination';
import { popover } from './popover';
import { progress } from './progress';
import { radioGroup } from './radio-group';
import { rating } from './rating';
import { segmentedControl } from './segmented-control';
import { selectRecipe } from './select';
import { skeleton } from './skeleton';
import { slider } from './slider';
import { switchRecipe } from './switch';
import { table } from './table';
import { tabsRecipe } from './tabs';
import { tag } from './tag';
import { tagsInput } from './tags-input';
import { textarea } from './textarea';
import { toastRecipe } from './toast';
import { tooltipRecipe } from './tooltip';
import { avatarRecipe } from './avatar';
import { appShellRecipe } from './app-shell';
import { dialogRecipe } from './dialog';
import { backdropRecipe } from './backdrop';
import { commandRecipe } from './command';
import { datePickerRecipe } from './date-picker';
import { clipboardRecipe } from './clipboard';

export const slotRecipes: Theme['slotRecipes'] = {
  actionBar,

  badge,
  breadcrumb,
  button,
  card,
  carousel,
  collapsible,
  hoverCard,
  numberInput,
  progress,
  radioGroup,
  rating,
  segmentedControl,
  skeleton,
  slider,
  table,
  tag,
  tagsInput,
  textarea,
};

export const recipes: Theme['recipes'] = {
  accordion,
  alert,
  appShell: appShellRecipe,
  avatar: avatarRecipe,
  backdrop: backdropRecipe,
  buttonGroup,
  checkbox,
  combobox,
  command: commandRecipe,
  clipboard: clipboardRecipe,
  datePicker: datePickerRecipe,
  dialog: dialogRecipe,
  drawer,
  input: inputRecipe,
  menu,
  pagination,
  popover,
  select: selectRecipe,
  switchRecipe: switchRecipe,
  tabs: tabsRecipe,
  toast: toastRecipe,
  tooltip: tooltipRecipe,
};

export * from './accordion';
export * from './action-bar';
export * from './alert';
export * from './avatar';
export * from './badge';
export * from './breadcrumb';
export * from './button-group';
export * from './button';
export * from './card';
export * from './carousel';
export * from './checkbox';
export * from './collapsible';
export * from './combobox';
export * from './date-picker';
export * from './clipboard';
export * from './drawer';
export * from './radio-group';
export * from './rating';
export * from './segmented-control';
export * from './select';
export * from './skeleton';
export * from './slider';
export * from './switch';
export * from './table';
export * from './tabs';
export * from './tag';
export * from './tags-input';
export * from './textarea';
export * from './toast';
export * from './tooltip';
