import { TbEdit, TbSearch } from 'react-icons/tb';
import { Avatar, Button, Input, Level, Media } from '@particles/tailwind';
import { users } from './index';

interface MessageListProps {
  data: any;
}

export function MessageList(props: MessageListProps) {
  const { data } = props;
  return (
    <div className="flex min-w-[20%] max-w-lg flex-col overflow-hidden border-r border-neutral-200">
      {/* header */}
      <div className="sticky flex flex-col gap-4 p-4">
        <Level>
          <div className="flex place-items-center gap-2 text-lg font-semibold">
            Messages{' '}
            <span className="inline-flex place-items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-sm font-normal text-purple-600">
              40
            </span>
          </div>
          <div>
            <Button palette="secondary" icon={<TbEdit />} label="Edit" />
          </div>
        </Level>
        <div className="w-full">
          <Input
            icon={<TbSearch />}
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
      </div>
      {/* Message list */}
      <div className="h-full flex-1 overflow-auto">
        {/* Message preview */}
        {data.map((message) => {
          const user = users.find(
            (user) => user.id === message.messages[0].from
          );
          return (
            <div
              key={message.id}
              className="flex flex-col gap-4 border-b border-neutral-200 p-4 hover:bg-neutral-50"
              onClick={() => alert('Go to message')}
            >
              <Media>
                <Media.Image>
                  <Avatar src={user.avatar} />
                </Media.Image>
                <Media.Body>
                  <div className="flex place-content-between">
                    <div>
                      <span className="text-base font-semibold text-neutral-700">
                        {user.name}
                      </span>
                      <br />
                      <span className="text-base text-neutral-500">
                        @{user.username}
                      </span>
                    </div>
                    <span className="text-sm text-neutral-400">
                      {message.messages[0].timestamp}
                    </span>
                  </div>
                </Media.Body>
              </Media>
              <div className="text-neutral-500">{message.messages[0].body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
