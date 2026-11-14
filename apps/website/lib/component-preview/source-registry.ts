import 'server-only';
import type { ExampleId } from './registry';

declare const __PREVIEW_SOURCE_BUTTON__: string;
declare const __PREVIEW_SOURCE_SELECT__: string;
declare const __PREVIEW_SOURCE_AVATAR__: string;

export const sources: Record<ExampleId, string> = {
  button: __PREVIEW_SOURCE_BUTTON__,
  select: __PREVIEW_SOURCE_SELECT__,
  avatar: __PREVIEW_SOURCE_AVATAR__,
};
