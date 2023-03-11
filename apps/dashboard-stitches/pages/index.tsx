import Link from 'next/link';
import { Button, ButtonGroup, Center, Stack } from '@particles/stitches';

export function Index() {
  return (
    <Center>
      <Stack>
        <ButtonGroup>
          <Link href="/app" passHref>
            <Button as="a">Go to Application</Button>
          </Link>
          <Link href="/website" passHref>
            <Button as="a">Go to Website</Button>
          </Link>
        </ButtonGroup>
      </Stack>
    </Center>
  );
}

export default Index;
