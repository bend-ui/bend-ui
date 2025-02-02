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
import { input } from './input';
import { menu } from './menu';
import { numberInput } from './number-input';
import { pagination } from './pagination';
import { popover } from './popover';
import { progress } from './progress';
import { radioGroup } from './radio-group';
import { rating } from './rating';
import { segmentedControl } from './segmented-control';
import { select } from './select';
import { skeleton } from './skeleton';
import { slider } from './slider';
import { switchRecipe } from './switch';
import { table } from './table';
import { tabs } from './tabs';
import { tag } from './tag';
import { tagsInput } from './tags-input';
import { textarea } from './textarea';
import { toast } from './toast';
import { tooltip } from './tooltip';
import { avatarRecipe } from './avatar';
import { appShellRecipe } from './app-shell';

export const slotRecipes: Theme['slotRecipes'] = {
  accordion,
  actionBar,
  alert,
  badge,
  breadcrumb,
  button,
  card,
  carousel,
  checkbox,
  collapsible,
  drawer,
  hoverCard,
  input,
  menu,
  numberInput,
  pagination,
  popover,
  progress,
  radioGroup,
  rating,
  segmentedControl,
  select,
  skeleton,
  slider,
  switchRecipe,
  table,
  tabs,
  tag,
  tagsInput,
  textarea,
  toast,
  tooltip,
};

export const recipes: Theme['recipes'] = {
  appShell: appShellRecipe,
  buttonGroup,
  combobox,
  avatar: avatarRecipe,
};

export * from './accordion';
export * from './action-bar';
export * from './alert';
export * from './badge';
export * from './breadcrumb';
export * from './button';
export * from './button-group';
export * from './card';
export * from './carousel';
export * from './checkbox';
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
