import {
  createComponent,
  forwardRef,
  Tabs as Primitive,
} from '@particles/primitives';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '../../styles';

const useStyles = createStyles({
  root: {
    base: [
      'overflow-hidden',
      'rounded-lg',
      'border',
      'border-gray-200',
      'shadow-md',
    ],
  },
  list: {
    base: [
      'flex',
      'font-medium',
      'text-shark-500',
      'border-b',
      'border-shark-200',
      'dark:text-shark-400',
      'dark:border-shark-700',
    ],
  },
  tab: {
    base: [
      'inline-block',
      'px-4',
      'py-2',
      'border-b-4',
      'border-transparent',
      'rounded-t-lg',
      'hover:text-shark-600',
      'hover:border-shark-300',
      'dark:hover:text-shark-300',
      'data-[state=active]:border-indigo-500',
    ],
  },
  panel: {
    base: ['p-4'],
  },
});

const Tabs = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const { classes } = useStyles();
  return (
    <Primitive.Root
      ref={ref}
      className={classes.root}
      defaultValue="tab1"
      {...rest}
    >
      <Primitive.List className={twMerge(classes.list)}>
        <Primitive.Tab value="tab1" className={classes.tab}>
          Tab 1
        </Primitive.Tab>
        <Primitive.Tab value="tab2" className={classes.tab}>
          Tab 2
        </Primitive.Tab>
      </Primitive.List>
      <Primitive.Panel value="tab1" className={classes.panel}>
        <h2>Tab 1</h2>
      </Primitive.Panel>
      <Primitive.Panel value="tab2" className={classes.panel}>
        <h2>Tab 2</h2>
      </Primitive.Panel>
    </Primitive.Root>
  );
});

export default createComponent(Tabs, {}, 'Tabs');
