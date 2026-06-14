import { scrollable } from '@bend-ui/styled-system/patterns';
import { cx, sva } from '@bend-ui/styled-system/css';
import { Avatar, Button } from '@bend-ui/radix';
import { useTheme } from 'next-themes';
import { conversations, users } from '../data';

const styles = sva({
  slots: ['wrapper', 'list', 'actions', 'settings'],
  base: {
    wrapper: {
      height: 'full',
      maxHeight: 'full',
      overflow: 'hidden',
      display: 'flex',
      flexDir: 'column',
    },
    list: {
      flex: '1 1 auto',
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      mt: 'auto',
      p: 'lg',
    },
    settings: {
      p: 'lg',
    },
  },
});

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const classes = styles();

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <div className={classes.wrapper}>
      <div className={cx(scrollable(), classes.list)}>
        {conversations.map((conversation) => (
          <div key={conversation.id}>
            <Avatar>
              <Avatar.Image
                src={
                  users.find((user) => user.id === conversation.userId)?.avatar
                }
              />
            </Avatar>
            <div>{conversation.name}</div>
          </div>
        ))}
      </div>
      <div className={classes.actions}>
        <Button>Add</Button>
      </div>
      <div className={classes.settings}>
        <Button onClick={toggleTheme}>Toggle Mode</Button>
      </div>
    </div>
  );
};
