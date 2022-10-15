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
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  Text,
  Tiles,
} from '@particles/stitches';
import { Layout } from './components/Layout';

const FeatureCard: React.FC<{
  children: React.ReactNode;
  title: React.ReactNode;
  icon: React.ReactElement;
}> = (props) => {
  const { children, title, icon } = props;
  return (
    <Stack align="center">
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          backgroundColor: '$blue200',
          width: '3rem',
          height: '3rem',
          borderRadius: '$full',
          border: '4px solid $blue100',
          color: '$blue500',
          fontSize: '$xl',
          mb: '$lg',
        }}
      >
        {icon}
      </Box>
      <Heading variant="subtitle" align="center" sx={{ mb: '$xs' }}>
        {title}
      </Heading>
      <Text align="center">{children}</Text>
    </Stack>
  );
};

export default function Website() {
  return (
    <Layout>
      <Container>
        <Stack align="center" sx={{ pt: '$xxl' }}>
          <Badge sx={{ mb: '$md' }}>Check out the team dashboard</Badge>
          <Heading variant="display" align="center" sx={{ mb: '$xl' }}>
            Beautiful analytics to grow smarter
          </Heading>
          <Text variant="lead" align="center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Text>
          <img src="" alt="" />
          <ButtonGroup size="lg" sx={{ my: '$xxl' }}>
            <Button palette="neutral" variant="outline" icon={<FiPlayCircle />}>
              Demo
            </Button>
            <Button>Sign up</Button>
          </ButtonGroup>
        </Stack>
        <section>
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
        </section>
        <section>
          <Stack align="center">
            <Badge sx={{ mb: '$sm' }}>Features</Badge>
            <Heading align="center" sx={{ mb: '$lg' }}>
              Analytics that feels like it&apos;s from the future
            </Heading>
            <Text variant="lead" align="center" sx={{ mb: '$xxl' }}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </Text>
            <Tiles>
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
        </section>
        <section>
          <Stack align="center">
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
        </section>
        <section>
          <Stack align="center">
            <Badge>Features</Badge>
            <Heading sx={{ mb: '$lg' }}>
              Cutting-edge features for advanced analytics
            </Heading>
            <Text variant="lead" align="center">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </Text>
            <img src="" alt="" />
            <Tiles>
              <FeatureCard title="Share team inboxes" icon={<FiMail />}>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
                <Button variant="link" iconEnd={<FiArrowRight />}>
                  Learn more
                </Button>
              </FeatureCard>
              <FeatureCard title="Deliver instant answers" icon={<FiZap />}>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
                <Button variant="link" iconEnd={<FiArrowRight />}>
                  Learn more
                </Button>
              </FeatureCard>
              <FeatureCard
                title="Manage your team with reports"
                icon={<FiBarChart2 />}
              >
                Measure what matters with Untitled&apos;s easy-to-use reports.
                You can filter, export, and drilldown on the data in a couple
                clicks.
                <Button variant="link" iconEnd={<FiArrowRight />}>
                  Learn more
                </Button>
              </FeatureCard>
            </Tiles>
          </Stack>
        </section>
      </Container>
    </Layout>
  );
}
