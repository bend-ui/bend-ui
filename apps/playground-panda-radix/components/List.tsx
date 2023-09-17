import {
  type ComponentPropsWithoutRef,
  createContext,
  type ReactNode,
  useContext,
} from 'react';

interface ListContextOptions {
  icon?: ReactNode;
}

const ListContext = createContext<ListContextOptions>({ icon: undefined });

const ListContextProvider = ListContext.Provider;

const useListContext = () => useContext(ListContext);

type ListProps = ComponentPropsWithoutRef<'ul'> & ListContextOptions;

const List = (props: ListProps) => {
  const { children, icon, ...rest } = props;
  const context = { icon };

  return (
    <ListContextProvider value={context}>
      <ul {...rest}>{children}</ul>
    </ListContextProvider>
  );
};

type ItemProps = ComponentPropsWithoutRef<'li'> & {
  icon?: ReactNode;
};

const Item = (props: ItemProps) => {
  const { children, icon, ...rest } = props;
  const context = useListContext();
  const iconComponent = context.icon || icon;
  return (
    <li {...rest}>
      {iconComponent}
      {children}
    </li>
  );
};

export default Object.assign(List, { Item });
