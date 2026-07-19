import { defineRecipe } from '@pandacss/dev';

export const surface = defineRecipe({
  className: 'Surface',
  base: {
    backgroundColor: 'bg.raised',
    border: 'border.weak',
    borderRadius: '8px',
    padding: '4',
  },
  variants: {
    elevation: {
      none: {},
      raised: { boxShadow: 'sm' },
    },
  },
  defaultVariants: {
    elevation: 'none',
  },
});

export const metric = defineRecipe({
  className: 'Metric',
  base: {},
});

export const pageHeader = defineRecipe({
  className: 'PageHeader',
  base: {
    display: 'flex',
    flexDirection: { base: 'column', lg: 'row' },
    alignItems: { base: 'stretch', lg: 'center' },
    justifyContent: 'space-between',
    gap: '4',
  },
});

export const panelHeader = defineRecipe({
  className: 'PanelHeader',
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '3',
  },
});

export const responsiveGrid = defineRecipe({
  className: 'ResponsiveGrid',
  base: {
    display: 'grid',
    gap: '4',
  },
});

export const timelineItem = defineRecipe({
  className: 'TimelineItem',
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '3',
    paddingY: '2',
  },
});

export const actionItem = defineRecipe({
  className: 'ActionItem',
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '3',
    width: 'full',
    borderRadius: '8px',
    padding: '3',
    textAlign: 'left',
    _hover: { backgroundColor: 'bg.subtle' },
  },
});
