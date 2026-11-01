import { defineSemanticTokens } from '@pandacss/dev';

export const durations = defineSemanticTokens.durations({
  fast: { value: '120ms' },
  normal: { value: '180ms' },
  slow: { value: '260ms' },
});

export const easings = defineSemanticTokens.easings({
  enter: { value: '{easings.default}' },
  exit: { value: '{easings.default}' },
});
