import React from 'react';

export const Footer: React.FC = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
