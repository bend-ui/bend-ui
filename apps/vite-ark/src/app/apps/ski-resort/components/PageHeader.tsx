import { styled } from '@particles/styled-system/jsx';

export interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeaderRoot = styled('header', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
  },
});

export interface PageHeaderTitleProps {
  children: React.ReactNode;
}

const PageHeaderTitle = styled('h1', {
  base: {
    gridColumn: '1 / -1',
    gridRow: '1 / 1',
    fontSize: '2xl',
    fontWeight: 'bold',
  },
});

export interface PageHeaderSubtitleProps {
  children: React.ReactNode;
}

const PageHeaderSubtitle = styled('p', {
  base: {
    gridColumn: '1 / -1',
    gridRow: '2 / 2',
    fontSize: 'lg',
    color: 'text.weak',
  },
});

export interface PageHeaderActionsProps {
  children: React.ReactNode;
}

const PageHeaderActions = styled('div', {
  base: { gridColumn: '2 / 2', gridRow: '1 / -1', display: 'flex', gap: 'sm' },
});

export const PageHeader = Object.assign(PageHeaderRoot, {
  Title: PageHeaderTitle,
  Subtitle: PageHeaderSubtitle,
  Actions: PageHeaderActions,
});
