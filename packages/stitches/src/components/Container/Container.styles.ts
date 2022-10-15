import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100%',
  mx: 'auto',
  '@min-mobile': {
    maxWidth: '40rem',
  },
  '@min-tablet': {
    maxWidth: '48rem',
  },
  '@min-desktop': {
    maxWidth: '64rem',
  },
});
