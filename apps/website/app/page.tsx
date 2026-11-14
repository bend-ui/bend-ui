import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ maxWidth: 720, padding: 32, margin: 'auto' }}>
      <h1>Bend UI</h1>
      <p>Components and design-system tools for building interfaces.</p>
      <nav aria-label="Explore Bend UI">
        <ul>
          <li>
            <Link href="/docs">Documentation</Link>
          </li>
          <li>
            <Link href="/showcase">Studio workspace example</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
