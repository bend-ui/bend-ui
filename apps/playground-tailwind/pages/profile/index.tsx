import Link from 'next/link';
import { TbDotsVertical } from 'react-icons/tb';
import { Avatar, Button } from '@particles/tailwind';
import { Layout } from '../../components';
import type { InferGetStaticPropsType } from 'next';

const data = {
  name: 'Olivia Rhye',
  username: 'olivia',
  avatar: 'images/user-2.jpg',
  isVerified: true,
  intro: "I'm a Product Designer based in Melbourne.",
  experience:
    'I specialise in UX/UI design, brand strategy, and Webflow development.',
  about:
    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. I'm always striving to grow and learn something new and I don't take myself too seriously. I'm passionate about helping startups grow, improve their customer experience, and to raise venture capital through good design.",
  location: 'Melbourne, Australia',
  website: 'oliviarhye.com',
  portfolio: '@oliviarhye',
  email: 'hello@oliviarhye.com',
};

export default function ProfilePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = props;
  return (
    <Layout>
      <div className="h-40 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
        {/* Banner */}
      </div>
      <div className="mx-auto max-w-6xl px-8">
        <div className="-mt-8 flex">
          {/* Profile header */}
          <div className="flex items-center gap-4">
            <div>
              <Avatar
                className="h-40 w-40 border-4 border-white shadow-md"
                src={data.avatar}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold">{data.name}</h1>
              <p className="text-base">{data.intro}</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              palette="secondary"
              icon={<TbDotsVertical />}
              label="More"
            />
            <Button>View portfolio</Button>
            <Button>Follow</Button>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Profile content */}
          <h2 className="font-medium">Experience</h2>
          <p>{data.experience}</p>
          <hr />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium">About me</h3>
              <p>{data.about}</p>
              <Link href="">Read more</Link>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h4>Location</h4>
                <p>{data.location}</p>
              </div>
              <div>
                <h4>Website</h4>
                <Link href={data.website}>{data.website}</Link>
              </div>
              <div>
                <h4>Portfolio</h4>
                <p>{data.portfolio}</p>
              </div>
              <div>
                <h4>Email</h4>
                <Link href={`mailto:${data.email}`}>{data.email}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
