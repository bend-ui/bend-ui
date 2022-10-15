export const variant =
  (args: { prop: string; variants: object }) => (props) => {
    const { prop, variants } = args;
    return variants[props[prop]];
  };
