import { Layout } from '../../components';
import { MessageList } from './MessageList';
import { MessageView } from './MessageView';
import type { InferGetStaticPropsType } from 'next';

export const users = [
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
        timestamp: '1701648720000',
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
        timestamp: '1701648900000',
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
      <div className="flex h-full w-full flex-row">
        <MessageList data={data} />
        <MessageView />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { data },
  };
}
