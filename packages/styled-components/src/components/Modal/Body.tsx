import React from 'react';

export const Body: React.FC = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
