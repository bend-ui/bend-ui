import { level } from '@bend-ui/styled-system/patterns';
import { cx, sva } from '@bend-ui/styled-system/css';
import { Button, Input } from '@bend-ui/radix';

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
