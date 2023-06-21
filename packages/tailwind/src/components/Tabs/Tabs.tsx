import {
  createComponent,
  forwardRef,
  Tabs as Primitive,
} from '@particles/primitives';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '../../styles';

const useStyles = createStyles({
  root: {
    base: ['overflow-hidden'],
  },
  list: {
    base: ['flex', 'font-medium', 'border-b', 'border-surface'],
  },
  tab: {
    base: [
      'inline-block',
      'px-4',
      'py-2',
      'border-b-4',
      'border-transparent',
      'rounded-t-lg',
      'hover:border-surface-accent',
      'data-[state=active]:border-primary',
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
