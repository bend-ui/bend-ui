import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Heading,
  Stack,
  Text,
  Tiles,
} from '@particles/emotion';
import { Layout } from './components/Layout';

export default function Pricing() {
  return (
    <Layout>
      <section>
        <Container sx={{ py: '$xxl' }}>
          <Stack>
            <Heading variant="subtitle">Pricing</Heading>
            <Heading variant="title" marginBottom="$md">
              Simple, transparent pricing
            </Heading>
            <Text variant="lead">
              We believe Untitled should be accessible to all companies, no
              matter the size.
            </Text>
          </Stack>
        </Container>
      </section>
      <section>
        <Container>
          <Tiles columns={3}>
            <Card>
              <Text>$10/mth</Text>
              <Text>Basic plan</Text>
              <Text>Billed annually.</Text>
              <ul>
                <li>Access to basic features</li>
                <li>Basic reporting and analytics</li>
                <li>Up to 10 individual users</li>
                <li>20GB individual data each user</li>
                <li>Basic chat and email support</li>
              </ul>
              <ButtonGroup>
                <Button palette="primary">Get started</Button>
                <Button>Chat to sales</Button>
              </ButtonGroup>
            </Card>
            <Card>
              <Text>$20/mth</Text>
            </Card>
            <Card>
              <Text>$40/mth</Text>
            </Card>
          </Tiles>
        </Container>
      </section>
      <section>
        <Container>
          <Heading variant="subtitle">Features</Heading>
          <Heading variant="title">Beautiful analytics to grow smarter</Heading>
          <Text variant="lead">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Text>
          <Tiles columns={3}>
            <Box>Feature box</Box>
            <Box>Feature box</Box>
            <Box>Feature box</Box>
            <Box>Feature box</Box>
            <Box>Feature box</Box>
            <Box>Feature box</Box>
          </Tiles>
        </Container>
      </section>
      <section>
        <Container>
          <Heading variant="title">FAQs</Heading>
          <Text variant="lead">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </Text>
          <Tiles columns={3}>
            <Box>FAQ box</Box>
            <Box>FAQ box</Box>
            <Box>FAQ box</Box>
            <Box>FAQ box</Box>
            <Box>FAQ box</Box>
            <Box>FAQ box</Box>
          </Tiles>
        </Container>
      </section>
      <section>
        <Container>
          <Heading>Start your 30-day free trial</Heading>
        </Container>
      </section>
    </Layout>
  );
}
