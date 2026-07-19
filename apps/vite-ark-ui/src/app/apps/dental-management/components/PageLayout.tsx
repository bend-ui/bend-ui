import { styled } from '@bend-ui/styled-system/jsx';

const PageLayoutRoot = styled('div', {});

const PageLayoutTitle = styled('h1', {
  base: {
    fontSize: '2xl',
    fontWeight: 'bold',
    mb: '4',
  },
});

const PageLayoutContent = styled('div', {
  base: {
    p: '4',
  },
});

export const PageLayout = Object.assign(PageLayoutRoot, {
  Title: PageLayoutTitle,
  Content: PageLayoutContent,
});
