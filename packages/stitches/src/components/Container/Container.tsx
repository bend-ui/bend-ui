import React from 'react';
import * as Styled from './Container.styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children, ...rest } = props;
  return <Styled.Container {...rest}>{children}</Styled.Container>;
};

export default Container;
