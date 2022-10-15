import React from 'react';
import {
  FiArrowRight,
  FiBarChart2,
  FiCommand,
  FiMail,
  FiMessageCircle,
  FiPlayCircle,
  FiSmile,
  FiZap,
} from 'react-icons/fi';
import {
  Accordion,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  SplitLayout,
  Stack,
  Text,
  Tiles,
} from '@particles/emotion';
import { Layout } from './components/Layout';

const FeatureCard: React.FC<{
  children: React.ReactNode;
  title: React.ReactNode;
  icon: React.ReactElement;
}> = (props) => {
  const { children, title, icon } = props;
  return (
    <Stack>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          backgroundColor: '$primary-subtle',
          width: '3rem',
          height: '3rem',
          borderRadius: '$full',
          border: '4px solid $primary-subtle',
          color: '$primary',
          fontSize: '$xl',
          mb: '$lg',
        }}
      >
        {icon}
      </Box>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </Stack>
  );
};

export default function Website() {
  return (
    <Layout>
      <Container>
        <Box as="section" py="$2xl">
          <Stack align="stretch">
            <Center>
              <Badge>Check out the team dashboard</Badge>
            </Center>
            <Heading variant="display" sx={{ textAlign: 'center' }}>
              Beautiful analytics to grow smarter
            </Heading>
            <Text variant="subtitle" sx={{ textAlign: 'center' }}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </Text>
            <img src="" alt="" />
            <Center>
              <ButtonGroup>
                <Button
                  palette="neutral"
                  variant="outline"
                  icon={<FiPlayCircle />}
                >
                  Demo
                </Button>
                <Button>Sign up</Button>
              </ButtonGroup>
            </Center>
          </Stack>
        </Box>
        <Box as="section" py="$2xl">
          <Stack align="center">
            <Text>Join 4,000+ companies already growing</Text>
            <Box>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </Box>
          </Stack>
        </Box>
        <Box as="section" py="$2xl">
          <Stack align="center">
            <Center>
              <Badge>Features</Badge>
            </Center>
            <Heading>
              Analytics that feels like it&apos;s from the future
            </Heading>
            <Text variant="subtitle">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </Text>
            <Tiles columns={3}>
              <FeatureCard title="Share team inboxes" icon={<FiMail />}>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </FeatureCard>
              <FeatureCard title="Deliver instant answers" icon={<FiZap />}>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </FeatureCard>
              <FeatureCard
                title="Manage your team with reports"
                icon={<FiBarChart2 />}
              >
                Measure what matters with Untitled&apos;s easy-to-use reports.
                You can filter, export, and drilldown on the data in a couple
                clicks.
              </FeatureCard>
              <FeatureCard title="Connect with customers" icon={<FiSmile />}>
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </FeatureCard>
              <FeatureCard
                title="Connect the tools you already use"
                icon={<FiCommand />}
              >
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </FeatureCard>
              <FeatureCard
                title="Our people make the difference"
                icon={<FiMessageCircle />}
              >
                We&apos;re an extension of your customer service team, and all
                of our resources are free. Chat to our friendly team 24/7 when
                you need help.
              </FeatureCard>
            </Tiles>
          </Stack>
        </Box>
        <Box as="section" py="$2xl">
          <Stack>
            <img src="" alt="" />
            <blockquote>
              We&apos;ve been using Untitled to kick start every new project and
              can&apos;t imagine working without it.
            </blockquote>
            <cite>
              <img src="" alt="" />
              <Text>Candice Wu</Text>
              <Text>Product Manager, Sisyphus</Text>
            </cite>
          </Stack>
        </Box>
        <Box as="section" py="$2xl">
          <Stack align="center">
            <Center>
              <Badge>Features</Badge>
            </Center>
            <Heading>Cutting-edge features for advanced analytics</Heading>
            <Text variant="subtitle">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </Text>
            <img src="" alt="" />
            <Tiles>
              <FeatureCard title="Share team inboxes" icon={<FiMail />}>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
                <Button iconEnd={<FiArrowRight />}>Learn more</Button>
              </FeatureCard>
              <FeatureCard title="Deliver instant answers" icon={<FiZap />}>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
                <Button iconEnd={<FiArrowRight />}>Learn more</Button>
              </FeatureCard>
              <FeatureCard
                title="Manage your team with reports"
                icon={<FiBarChart2 />}
              >
                Measure what matters with Untitled&apos;s easy-to-use reports.
                You can filter, export, and drilldown on the data in a couple
                clicks.
                <Button iconEnd={<FiArrowRight />}>Learn more</Button>
              </FeatureCard>
            </Tiles>
          </Stack>
        </Box>
      </Container>
      <Box as="section">
        <Container>
          <Heading>Frequently asked questions</Heading>
          <Text>
            Everything you need to know about the product and billing.
          </Text>
          <Accordion>
            <Accordion.Item>
              <summary>Is there a free trial available?</summary>
              <Text>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </Text>
            </Accordion.Item>
            <Accordion.Item>
              <summary>Can I change my plan later?</summary>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nulla impedit laborum veniam consectetur autem quod
                atque, deleniti tempore saepe, pariatur aspernatur optio fuga
                delectus quo consequuntur minus, iste sequi.
              </Text>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Box>
      <Box as="section">
        <Container py="$2xl">
          <Box py="$lg">
            <Heading variant="subtitle" sx={{ color: '$primary' }} mb="$sm">
              Launch faster
            </Heading>
            <Heading variant="title" mb="$md">
              Build something great
            </Heading>
            <Text variant="lead">
              We’ve done all the heavy lifting so you don’t have to — get all
              the data you need to launch and grow your business faster.
            </Text>
          </Box>
          <SplitLayout>
            <Center>
              <Tiles columns={2}>
                <Box>
                  <Text>Projects completed</Text>
                </Box>
                <Box>
                  <Text>Return on investment</Text>
                </Box>
                <Box>
                  <Text>Global downloads</Text>
                </Box>
                <Box>
                  <Text>5-star reviews</Text>
                </Box>
              </Tiles>
            </Center>
            <Box>
              <img
                src="https://images.unsplash.com/photo-1665232961734-3888d3fad745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                alt=""
              />
            </Box>
          </SplitLayout>
        </Container>
      </Box>
      <Box
        as="section"
        sx={{
          backgroundColor: '$neutral',
        }}
      >
        <Container py="$2xl">
          <Stack align="center">
            <Heading>Start your free trial</Heading>
            <Text>
              Join over 4,000+ startups already growing with Untitled.
            </Text>
            <ButtonGroup>
              <Button>Learn more</Button>
              <Button palette="primary">Get started</Button>
            </ButtonGroup>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
