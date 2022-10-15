import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  Level,
  Stack,
  Text,
  Tiles,
} from '@particles/stitches';
import { Layout } from './components/Layout';

export default function Pricing() {
  return (
    <Layout>
      <section>
        <Container>
          <Stack align="center">
            <Badge palette="primary">Pricing</Badge>
            <Heading>Plans that fit your scale</Heading>
            <Text>
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </Text>
          </Stack>
        </Container>
      </section>
      <section>
        <Container>
          <Tiles columns={3}>
            <Card>
              <Card.Header>
                <Level>
                  <Stack>
                    <Heading variant="subtitle">
                      Basic Plan <Badge>Popular</Badge>
                    </Heading>
                    <Text>Our most popular plan for small teams.</Text>
                  </Stack>
                  <Box>$10 per month</Box>
                </Level>
              </Card.Header>
              <Text>Basic features for up to 10 users.</Text>
              <Text>Features Everything is Starter plus...</Text>
              <ul>
                <li>Access to basic features</li>
                <li>Basic reporting and analytics</li>
                <li>Up to 10 individual users</li>
                <li>20GB individual data each user</li>
                <li>Basic chat and email support</li>
              </ul>
              <Card.Footer>
                <Button>Get started</Button>
              </Card.Footer>
            </Card>
          </Tiles>
        </Container>
      </section>
    </Layout>
  );
}
