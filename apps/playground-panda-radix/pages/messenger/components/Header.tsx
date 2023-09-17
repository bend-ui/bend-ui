import { level } from '@particles/panda-system/patterns';
import { cx, sva } from '@particles/panda-system/css';
import { Button, TextField } from '../../../components';

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
        <TextField />
      </div>
      <div>
        <Button>Settings</Button>
        <button>user menu</button>
      </div>
    </div>
  );
}
