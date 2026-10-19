import { button, text } from '../styled-system/recipes';
import { Button } from '@bend-ui/base-ui';
import type { ComponentProps } from 'react';

// @ts-expect-error Whole-recipe replacement removes the preset's danger variant.
button({ variant: 'danger' });
// @ts-expect-error Whole-recipe replacement removes the preset's sm size.
button({ size: 'sm' });
// @ts-expect-error Whole-recipe replacement removes preset-only axes.
button({ isRounded: true });
// @ts-expect-error Replacing Text must remove its original headline variant.
text({ variant: 'headline' });
// Published props remain unchanged even for values removed from consumer CSS.
const stillPublished: ComponentProps<typeof Button> = {
  variant: 'danger',
  size: 'sm',
};
void stillPublished;
