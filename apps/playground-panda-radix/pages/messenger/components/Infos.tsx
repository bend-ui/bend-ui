import { sva } from '@particles/panda';
import { TbPhone, TbVideo } from 'react-icons/tb';
import { Button } from '../../../components';

const styles = sva({
  slots: ['wrapper'],
  base: {
    wrapper: {
      height: 'full',
      display: 'flex',
      flexDir: 'column',
      p: 'lg',
    },
  },
});

export function Infos() {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div>Avatars</div>
      <div>Group name</div>
      <div>
        <Button icon={<TbPhone />}>Call Group</Button>
        <Button icon={<TbVideo />}>Video Chat</Button>
      </div>
      <div>status</div>
    </div>
  );
}
