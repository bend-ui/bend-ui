import { defineSlotRecipe } from '@pandacss/dev';

export const colorPicker = defineSlotRecipe({
  className: 'ColorPicker',
  slots: [
    'root',
    'label',
    'control',
    'trigger',
    'positioner',
    'content',
    'area',
    'areaBackground',
    'areaThumb',
    'channelSlider',
    'channelSliderTrack',
    'channelSliderThumb',
    'channelInput',
    'swatch',
    'swatchGroup',
    'swatchTrigger',
    'eyeDropperTrigger',
    'formatSelect',
    'formatTrigger',
    'valueText',
  ],
});
