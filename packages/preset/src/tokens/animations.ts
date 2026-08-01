import { defineTokens } from '@pandacss/dev';

export const animations = defineTokens.animations({
  'backdrop-in': {
    value: 'fade-in {durations.normal} {easings.enter}',
  },
  'backdrop-out': {
    value: 'fade-out {durations.fast} {easings.exit}',
  },
  'dialog-in': {
    value: 'slide-in {durations.slow} {easings.enter}',
  },
  'dialog-out': {
    value: 'slide-out {durations.fast} {easings.exit}',
  },
  'drawer-in-left': {
    value: 'slide-in-left {durations.slow} {easings.enter}',
  },
  'drawer-out-left': {
    value: 'slide-out-left {durations.fast} {easings.exit}',
  },
  'drawer-in-right': {
    value: 'slide-in-right {durations.slow} {easings.enter}',
  },
  'drawer-out-right': {
    value: 'slide-out-right {durations.fast} {easings.exit}',
  },
  'skeleton-pulse': {
    value: 'skeleton-pulse 2s {easings.pulse} infinite',
  },
  'fade-in': {
    value: 'fade-in {durations.normal} {easings.enter}',
  },
  'fade-out': {
    value: 'fade-out {durations.fast} {easings.exit}',
  },
  'collapse-in': {
    value: 'collapse-in {durations.normal} {easings.enter}',
  },
  'collapse-out': {
    value: 'collapse-out {durations.fast} {easings.exit}',
  },
  spin: {
    value: 'spin 1s linear infinite',
  },
});
