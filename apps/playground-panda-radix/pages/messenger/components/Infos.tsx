import { sva } from '@particles/styled-system/css';
import { PhoneIcon, VideoIcon } from 'lucide-react';
import { Button } from '@particles/radix';

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
        <Button icon={<PhoneIcon />}>Call Group</Button>
        <Button icon={<VideoIcon />}>Video Chat</Button>
      </div>
      <div>status</div>
    </div>
  );
}
