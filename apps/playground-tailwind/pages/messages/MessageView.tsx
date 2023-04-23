import { TbDotsVertical, TbMoodSmile } from 'react-icons/tb';
import { Avatar, Button, ButtonGroup, Level, Media } from '@particles/tailwind';

export const users = [
  {
    id: 1,
    username: 'phoenix',
    name: 'Phoenix Baker',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=225E6693',
    isVerified: false,
    status: 'online',
  },
  {
    id: 2,
    username: 'kathy',
    name: 'Katherine Moss',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=8B7BCDC2',
    isVerified: true,
    status: 'offline',
  },
  {
    id: 3,
    username: 'olivia',
    name: 'Olivia Rhye',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=9D9539E7',
    isVerified: true,
    status: 'online',
  },
];

const data = {
  users: [1],
  messages: [
    {
      id: 123,
      from: 1,
      body: 'Hey Olivia, can you please review the latest design when you can?',
      timestamp: '1701648720000',
    },
    {
      id: 456,
      from: 1,
      body: 'No rush though — we still have to wait for Lana’s designs.',
      timestamp: '1701648780000',
    },
    {
      id: 789,
      from: 3,
      body: 'Sure thing, I’ll have a look today. They’re looking great!',
      timestamp: '1701648900000',
    },
  ],
};

export function MessageView() {
  const currentUser = 3;

  return (
    <div className="flex min-w-max flex-1 flex-col">
      {/* Header */}
      <div className="sticky flex grow-0 place-content-between border-b border-neutral-200 p-4">
        {data.users.map((userId) => {
          const user = users.find((user) => user.id === userId);
          return (
            <Media key={`user-${userId}`}>
              <Media.Image>
                <Avatar src={user.avatar} size="lg" />
              </Media.Image>
              <Media.Body>
                <div className="flex place-items-center gap-2 text-2xl font-semibold text-neutral-800">
                  {user.name}{' '}
                  <span className="inline-flex place-items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-sm font-normal text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-600" />
                    {user.status}
                  </span>
                </div>
                <div className="text-neutral-600">@{user.username}</div>
              </Media.Body>
            </Media>
          );
        })}

        <ButtonGroup>
          <Button>Call</Button>
          <Button palette="secondary">Archive</Button>
          <Button>View profile</Button>
          <Button palette="secondary">
            <TbDotsVertical />
          </Button>
        </ButtonGroup>
      </div>
      {/* Message feed */}
      <div className="flex-1 overflow-y-auto">
        {data.messages.map((message) => {
          const user = users.find((user) => user.id === message.from);
          return (
            <div key={`message-${message.id}`} className="p-4">
              <Media>
                <Media.Image>
                  <Avatar src={user.avatar} />
                </Media.Image>
                <Media.Body>
                  <Level className="mb-1">
                    <div className="text-md font-medium leading-loose text-neutral-700">
                      {user.name}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {message.timestamp}
                    </div>
                  </Level>
                  <div className="rounded-xl rounded-tl-none bg-neutral-100 p-3">
                    {message.body}
                  </div>
                </Media.Body>
              </Media>
            </div>
          );
        })}
      </div>
      {/* Message box */}
      <div className="sticky grow-0 p-4">
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          placeholder="Send a message"
          className="w-full rounded-2xl border border-neutral-300 p-4"
        />
        <ButtonGroup>
          <Button palette="secondary">
            <TbMoodSmile />
          </Button>
          <Button palette="secondary">
            <TbDotsVertical />
          </Button>
          <Button>Send</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
