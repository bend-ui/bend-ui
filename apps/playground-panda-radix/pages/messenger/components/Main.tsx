import { cx, level, scrollable, sva } from '@particles/panda';
import { Avatar, Button, TextField } from '../../../components';
import { conversations, messages, users } from '../data';

const styles = sva({
  slots: ['wrapper', 'header', 'content', 'footer'],
  base: {
    wrapper: {
      height: 'full',
      display: 'flex',
      flexDir: 'column',
      maxHeight: 'full',
    },
    header: {
      flex: '0',
      p: 'lg',
    },
    content: {
      flex: '1 1 auto',
      p: 'lg',
      display: 'flex',
      flexDir: 'column',
      gap: 'lg',
    },
    footer: {
      flex: '0',
      p: 'lg',
      borderTop: '1px solid',
      borderTopColor: 'divider',
      display: 'flex',
      gap: 'md',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

const messageStyles = sva({
  slots: ['root', 'content'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'md',
    },
    content: {
      p: 'lg',
      rounded: 'xl',
    },
  },
  variants: {
    current: {
      false: {
        root: {
          flexDir: 'row',
        },
        content: {
          backgroundColor: 'shark.700',
          borderBottomLeftRadius: 'xs',
        },
      },
      true: {
        root: {
          flexDir: 'row-reverse',
        },
        content: {
          backgroundColor: 'primary',
          borderBottomRightRadius: 'xs',
        },
      },
    },
  },
});

interface MessageProp {
  message: {
    message: string;
    userId: string;
    createdAt: string;
  };
}

const currentUserId = '1';

function Message(props: MessageProp) {
  const { message } = props;
  const isCurrentUser = message.userId === currentUserId;
  const classes = messageStyles({
    current: isCurrentUser,
  });
  return (
    <div className={classes.root}>
      <div>
        <Avatar>
          <Avatar.Image
            src={users.find((user) => user.id === message.userId)?.avatar}
          />
        </Avatar>
      </div>
      <div>
        <div className={classes.content}>{message.message}</div>
        <div>{message.createdAt}</div>
      </div>
    </div>
  );
}

export function Main() {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={cx(level(), classes.header)}>
        <div>{conversations[1].name}</div>
        <div>Avatars</div>
      </div>
      <div className={cx(scrollable(), classes.content)}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className={classes.footer}>
        <Button>Video</Button>
        <Button>Image</Button>
        <Button>Add</Button>
        <Button>Attachment</Button>
        <TextField placeholder="Type something..." />
        <Button>Emoji</Button>
        <Button>Like</Button>
      </div>
    </div>
  );
}
