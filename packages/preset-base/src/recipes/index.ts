import { Theme } from '@pandacss/types';
import { accordion } from './accordion';
import { actionBar } from './action-bar';
import { alert } from './alert';
import { badge } from './badge';
import { breadcrumb } from './breadcrumb';
import { button } from './button';
import { buttonGroup } from './button-group';
import { calendar } from './calendar';
import { card } from './card';
import { carousel } from './carousel';
import { checkbox } from './checkbox';
import { clipboardRecipe } from './clipboard';
import { collapsible } from './collapsible';
import { colorPicker } from './color-picker';
import { combobox } from './combobox';
import { commandRecipe } from './command';
import { datePickerRecipe } from './date-picker';
import { dialogRecipe } from './dialog';
import { drawer } from './drawer';
import { editable } from './editable';
import { fileUpload } from './file-upload';
import { fieldset } from './fieldset';
import { floatingPanel } from './floating-panel';
import { gridList } from './grid-list';
import { highlight } from './highlight';
import { hoverCard } from './hover-card';
import { imageCropper } from './image-cropper';
import { inputRecipe } from './input';
import { link } from './link';
import { listbox } from './listbox';
import { marquee } from './marquee';
import { menu } from './menu';
import { menubar } from './menubar';
import { navigationMenu } from './navigation-menu';
import { numberInput } from './number-input';
import {
  actionItem,
  metric,
  pageHeader,
  panelHeader,
  responsiveGrid,
  surface,
  timelineItem,
} from './operational-patterns';
import { pagination } from './pagination';
import { pinInput } from './pin-input';
import { popover } from './popover';
import { progress } from './progress';
import { qrCode } from './qr-code';
import { radioGroupRecipe } from './radio-group';
import { rating } from './rating';
import { scrollArea } from './scroll-area';
import { segmentedControl } from './segmented-control';
import { selectDropdownRecipe, selectRecipe } from './select';
import { separator } from './separator';
import { sidebarRecipe } from './sidebar';
import { signaturePad } from './signature-pad';
import { skeleton } from './skeleton';
import { slider } from './slider';
import { splitter } from './splitter';
import { steps } from './steps';
import { switchRecipe } from './switch';
import { table } from './table';
import { tabsRecipe } from './tabs';
import { tag } from './tag';
import { tagsInput } from './tags-input';
import { textarea } from './textarea';
import { timePicker } from './time-picker';
import { toastRecipe } from './toast';
import { toggle } from './toggle';
import { toggleGroupRecipe } from './toggle-group';
import { toolbar } from './toolbar';
import { tooltipRecipe } from './tooltip';
import { tour } from './tour';
import { tree } from './tree';
import { avatarRecipe } from './avatar';
import { appShellRecipe } from './app-shell';
import { backdropRecipe } from './backdrop';
import { meter } from './meter';

export const slotRecipes: Theme['slotRecipes'] = {
  accordion,
  actionBar,
  alert,
  appShell: appShellRecipe,
  avatar: avatarRecipe,
  badge,
  breadcrumb,
  button,
  buttonGroup,
  calendar,
  carousel,
  checkbox,
  clipboard: clipboardRecipe,
  collapsible,
  colorPicker,
  combobox,
  command: commandRecipe,
  datePicker: datePickerRecipe,
  dialog: dialogRecipe,
  drawer,
  editable,
  fieldset,
  fileUpload,
  floatingPanel,
  gridList,
  hoverCard,
  imageCropper,
  input: inputRecipe,
  listbox,
  marquee,
  menu,
  menubar,
  navigationMenu,
  numberInput,
  pagination,
  pinInput,
  popover,
  progress,
  qrCode,
  radioGroup: radioGroupRecipe,
  rating,
  scrollArea,
  segmentedControl,
  select: selectRecipe,
  selectDropdown: selectDropdownRecipe,
  signaturePad,
  skeleton,
  slider,
  splitter,
  steps,
  table,
  tag,
  tagsInput,
  textarea,
  timePicker,
  toast: toastRecipe,
  toolbar,
  tooltip: tooltipRecipe,
  tour,
  tree,
  meter,
  tabs: tabsRecipe,
  toggleGroup: toggleGroupRecipe,
  sidebar: sidebarRecipe,
  switchRecipe,
  card,
};

export const recipes: Theme['recipes'] = {
  backdrop: backdropRecipe,
  highlight,
  link,
  actionItem,
  metric,
  pageHeader,
  panelHeader,
  responsiveGrid,
  separator,
  surface,
  timelineItem,
  toggle,
};

export * from './accordion';
export * from './action-bar';
export * from './alert';
export * from './avatar';
export * from './backdrop';
export * from './badge';
export * from './breadcrumb';
export * from './button-group';
export * from './button';
export * from './calendar';
export * from './card';
export * from './carousel';
export * from './checkbox';
export * from './clipboard';
export * from './collapsible';
export * from './color-picker';
export * from './combobox';
export * from './command';
export * from './date-picker';
export * from './dialog';
export * from './drawer';
export * from './editable';
export * from './file-upload';
export * from './fieldset';
export * from './floating-panel';
export * from './grid-list';
export * from './highlight';
export * from './hover-card';
export * from './image-cropper';
export * from './input';
export * from './link';
export * from './listbox';
export * from './marquee';
export * from './menu';
export * from './menubar';
export * from './meter';
export * from './navigation-menu';
export * from './number-input';
export * from './operational-patterns';
export * from './pagination';
export * from './pin-input';
export * from './popover';
export * from './progress';
export * from './qr-code';
export * from './radio-group';
export * from './rating';
export * from './scroll-area';
export * from './segmented-control';
export * from './select';
export * from './separator';
export * from './sidebar';
export * from './signature-pad';
export * from './skeleton';
export * from './slider';
export * from './splitter';
export * from './steps';
export * from './switch';
export * from './table';
export * from './tabs';
export * from './tag';
export * from './tags-input';
export * from './textarea';
export * from './time-picker';
export * from './toast';
export * from './toggle';
export * from './toggle-group';
export * from './toolbar';
export * from './tooltip';
export * from './tour';
export * from './tree';
