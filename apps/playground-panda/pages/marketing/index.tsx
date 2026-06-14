import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Button,
  ButtonGroup,
  Heading,
  Input,
  Level,
  Paragraph,
} from '@bend-ui/ark';
import { Divider, Grid, GridItem } from '@bend-ui/styled-system/jsx';
import { container } from '@bend-ui/styled-system/patterns';
import { css } from '@bend-ui/styled-system/css';

export default function Marketing() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <>
      <header className={css({ px: 'lg', py: 'lg', bgColor: 'surface' })}>
        <Level>
          <div>Acme</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">Marketing</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
          <ButtonGroup>
            <Button
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            />
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </ButtonGroup>
        </Level>
      </header>
      <main>
        <div className={container()}>
          <Heading as="h1" variant="headline">
            Marketing
          </Heading>
          <Paragraph variant="title">Some marketing content</Paragraph>
          <ButtonGroup>
            <Button>Get started</Button>
            <Button>Explore features</Button>
          </ButtonGroup>
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
        <Level>
          <div>Acme</div>
          <div>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Privacy</Link>
          </div>
          <div>
            <Input icon={<MailIcon />} placeholder="Your email" />
          </div>
        </Level>
        <Divider borderColor="border" my="md" />
        <Level>
          <div>
            <Paragraph>
              &copy; {new Date().getFullYear()} Acme. All rights reserved.
            </Paragraph>
          </div>
          <div>
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <InstagramIcon />
            </Link>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </div>
        </Level>
      </footer>
    </>
  );
}
