import { styled } from '@particles/styled-system/jsx';

export const PageWrapper = styled('div', {
  base: {
    '--particles-page-padding': '{spacing.lg}',
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    padding: 'var(--particles-page-padding)',
    minHeight: 'full',
  },
});
