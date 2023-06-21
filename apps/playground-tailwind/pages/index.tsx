import Link from 'next/link';
import { Card } from '@particles/tailwind';

export function Index() {
  const items = [
    'landing-page',
    'messages',
    'profile',
    'customers',
    'music-player',
    'design-tokens',
  ];
  return (
    <div className="flex h-screen w-full items-center justify-center gap-2">
      {items.map((item) => (
        <Card className="flex" key={item}>
          <Link className="p-4" href={item}>
            {item}
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Index;
