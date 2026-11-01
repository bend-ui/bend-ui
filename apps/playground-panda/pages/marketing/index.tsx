import Link from 'next/link';
import { MailIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button, Input } from '@bend-ui/ark-ui';
import { Heading, Paragraph, Stack } from '@bend-ui/base-ui';
import { Divider, Grid, GridItem } from '@bend-ui/styled-system/jsx';
import { container } from '@bend-ui/styled-system/patterns';
import { css } from '@bend-ui/styled-system/css';

export default function Marketing() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <>
      <header className={css({ px: 'lg', py: 'lg', bgColor: 'surface' })}>
        <Stack direction="row" align="center" justify="space-between">
          <div>Acme</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">Marketing</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
          <Stack direction="row">
            <Button
              aria-label={isDark ? 'Use light mode' : 'Use dark mode'}
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            />
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </Stack>
        </Stack>
      </header>
      <main>
        <div className={container()}>
          <Heading as="h1" variant="headline">
            Marketing
          </Heading>
          <Paragraph variant="title">Some marketing content</Paragraph>
          <Stack direction="row">
            <Button>Get started</Button>
            <Button>Explore features</Button>
          </Stack>
        </div>
        <div className={container()}>
          <Heading as="h2" variant="title">
            More marketing content
          </Heading>
          <Paragraph>Some more marketing content</Paragraph>
          <Grid columns={3} gap="md">
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
            <GridItem>
              <Heading as="h3">Marketing content</Heading>
              <Paragraph>Some marketing content</Paragraph>
            </GridItem>
          </Grid>
        </div>
      </main>
      <footer className={container()}>
        <Stack direction="row" align="center" justify="space-between">
          <div>Acme</div>
          <div>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Privacy</Link>
          </div>
          <div>
            <Stack direction="row" align="center">
              <MailIcon aria-hidden="true" />
              <Input aria-label="Your email" placeholder="Your email" />
            </Stack>
          </div>
        </Stack>
        <Divider borderColor="border" my="md" />
        <Stack direction="row" align="center" justify="space-between">
          <div>
            <Paragraph>
              &copy; {new Date().getFullYear()} Acme. All rights reserved.
            </Paragraph>
          </div>
          <div>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
          </div>
        </Stack>
      </footer>
    </>
  );
}
