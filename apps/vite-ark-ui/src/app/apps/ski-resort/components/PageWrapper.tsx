import { styled } from '@bend-ui/styled-system/jsx';

export const PageWrapper = styled('div', {
  base: {
    '--bend-ui-page-padding': '{spacing.lg}',
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    padding: 'var(--bend-ui-page-padding)',
    minHeight: 'full',
  },
});
