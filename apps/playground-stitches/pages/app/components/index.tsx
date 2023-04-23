import { styled } from '@particles/stitches';
import { Sidebar } from './Sidebar';

const Wrapper = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'minmax(min-content, 10rem) 1fr',
});

const Main = styled('main', {
  padding: '$xxl',
  overflowY: 'auto',
});

const Layout = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>{children}</Main>
  </Wrapper>
);

export default Layout;
