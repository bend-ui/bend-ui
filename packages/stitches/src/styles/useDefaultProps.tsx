export const useDefaultProps = (name: string, defaultProps, props) => {
  // console.log(name, defaultProps, props);

  return { ...defaultProps, ...props };
};
