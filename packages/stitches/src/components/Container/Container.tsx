import { createComponent, forwardRef } from '@particles/primitives';
import * as Styled from './Container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Styled.Container ref={ref} {...rest}>
      {children}
    </Styled.Container>
  );
});

export default createComponent(Container);
