import Link from 'next/link';
import { Container } from '@particles/emotion';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem
      quaerat dicta sed dolores enim, totam voluptate explicabo temporibus est
      et repellendus nulla dolorum perferendis dolore itaque necessitatibus eos
      quo.
      <ul>
        <li>
          <Link href="/app">App</Link>
        </li>
        <li>
          <Link href="/website">Website</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Index;
