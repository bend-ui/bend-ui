import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { hoverCard } from '@bend-ui/styled-system/recipes';

const { withRootProvider, withContext } = createSlotRecipeContext(hoverCard);

const PreviewCardRoot = withRootProvider(PreviewCardPrimitive.Root);

const PreviewCardTrigger = withContext(PreviewCardPrimitive.Trigger, 'trigger');

const PreviewCardPortal = PreviewCardPrimitive.Portal;

const PreviewCardPositioner = withContext(
  PreviewCardPrimitive.Positioner,
  'positioner',
);

const PreviewCardPopup = withContext(PreviewCardPrimitive.Popup, 'content');

const PreviewCardArrow = withContext(PreviewCardPrimitive.Arrow, 'arrow');

export const PreviewCard = Object.assign(PreviewCardRoot, {
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  Portal: PreviewCardPortal,
  Positioner: PreviewCardPositioner,
  Popup: PreviewCardPopup,
  Arrow: PreviewCardArrow,
});
