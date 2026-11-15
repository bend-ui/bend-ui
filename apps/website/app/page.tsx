import Link from 'next/link';
import type { Metadata } from 'next';
import { css } from '@bend-ui/styled-system/css';

export const metadata: Metadata = {
  title: 'Bend UI',
  description: 'Components and design-system tools for building interfaces.',
};

const link = css({
  color: 'text',
  fontWeight: 'medium',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  _hover: { textDecorationThickness: '2px' },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'stroke.primary',
    outlineOffset: '2px',
    borderRadius: 'sm',
  },
});

export default function Page() {
  return (
    <main
      className={css({
        maxWidth: '2xl',
        marginInline: 'auto',
        paddingInline: { base: '5', md: '10' },
        paddingBlock: { base: '16', md: '24' },
      })}
    >
      <h1
        className={css({
          fontSize: { base: '4xl', md: '5xl' },
          fontWeight: 'extrabold',
          letterSpacing: 'tight',
          lineHeight: 'tight',
        })}
      >
        Bend UI
      </h1>
      <p
        className={css({
          marginTop: '4',
          color: 'text.weak',
          fontSize: 'lg',
          lineHeight: 'relaxed',
          textWrap: 'pretty',
        })}
      >
        Components and design-system tools for building interfaces.
      </p>
      <nav aria-label="Explore Bend UI" className={css({ marginTop: '10' })}>
        <ul
          className={css({
            display: 'grid',
            gap: '3',
            listStyleType: 'disc',
            paddingInlineStart: '6',
          })}
        >
          <li>
            <Link href="/docs" className={link}>
              Documentation
            </Link>
          </li>
          <li>
            <Link href="/showcase" className={link}>
              Studio workspace example
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
