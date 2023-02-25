// import { useEffect, useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { Avatar, Button, Input } from '@particles/tailwind';
import { Layout } from '../../components';

const users = [
  {
    id: 1,
    username: 'phoenix',
    name: 'Phoenix Baker',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=225E6693',
    isVerified: false,
  },
  {
    id: 2,
    username: 'kathy',
    name: 'Katherine Moss',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=8B7BCDC2',
    isVerified: true,
  },
  {
    id: 3,
    username: 'olivia',
    name: 'Olivia Rhye',
    avatar: 'https://api.lorem.space/image/face?w=160&h=160&hash=9D9539E7',
    isVerified: true,
  },
];

const data = [
  {
    id: 123,
    users: [1],
    messages: [
      {
        from: 1,
        body: "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
        timestamp: '',
      },
    ],
  },
  {
    id: 456,
    users: [2],
    messages: [
      {
        from: 2,
        body: "Sure thing, I'll have a look today. They're looking great!",
        timestamp: '',
      },
    ],
  },
];

export default function MessagesPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = props;
  return (
    <Layout>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col p-3 overflow-hidden border-r border-neutral-200">
          {/* header */}
          <div className="sticky">
            <div>
              <div className="font-bold">Messages 40</div>
              <div>
                <Button>edit</Button>
              </div>
            </div>
            <div>
              <Input type="search" name="" id="" placeholder="Search" />
            </div>
          </div>
          {/* Message list */}
          <div className="overflow-auto flex-1 h-full">
            {/* Message preview */}
            {data.map((message) => (
              <div key={message.id} className="border-b border-neutral-200">
                <div>
                  <Avatar
                    src={
                      users.find((user) => user.id === message.messages[0].from)
                        .avatar
                    }
                  ></Avatar>
                  {
                    users.find((user) => user.id === message.messages[0].from)
                      .name
                  }{' '}
                  @
                  {
                    users.find((user) => user.id === message.messages[0].from)
                      .username
                  }{' '}
                  timestamp
                </div>
                <div>{message.messages[0].body}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          {/* Header */}
          <div className="border-b border-neutral-200">
            <div>Avatar + name + status</div>
            <div>
              <button>Call</button>
              <button>Archive</button>
              <button>View profile</button>
              <button>more</button>
            </div>
          </div>
          {/* Message feed */}
          <div></div>
          {/* Message box */}
          <div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Send a message"
            ></textarea>
            <button>Emoji</button>
            <button>More</button>
            <button>Send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { data },
  };
}
