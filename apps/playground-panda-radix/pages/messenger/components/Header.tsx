import { level } from '@particles/styled-system/patterns';
import { cx, sva } from '@particles/styled-system/css';
import { Button, Input } from '@particles/radix';

const styles = sva({
  slots: ['wrapper'],
  base: {
    wrapper: {
      p: 'md',
    },
  },
});

export function Header() {
  const classes = styles();
  return (
    <div className={cx(level(), classes.wrapper)}>
      <div>Logo</div>
      <div>
        <Input />
      </div>
      <div>
        <Button>Settings</Button>
        <button>user menu</button>
      </div>
    </div>
  );
}
