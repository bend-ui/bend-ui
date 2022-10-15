import { Meta } from '@storybook/react';
import {
  Container,
  Heading,
  Media,
  SplitLayout,
  Text,
  Tiles,
} from '../../../components';

export default {
  title: 'Patterns/Marketing/Features',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => {
  return (
    <Container py="$lg">
      <Heading>Designed for business teams like yours</Heading>
      <Text>
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </Text>
      <Tiles>
        <Media>
          <Media.Image></Media.Image>
          <Media.Content>
            <Heading>Marketing</Heading>
            <Text>
              Welcome to Raw Is Jericho! Will never, ever, be the same, again!
              If you smell, what The Rock is cooking!
            </Text>
          </Media.Content>
        </Media>
        <Media>
          <Media.Image></Media.Image>
          <Media.Content>
            <Heading>Security</Heading>
            <Text>
              This is for all my peeps! Can you dig it sucka? Beat me if you
              can, survive if I let you.
            </Text>
          </Media.Content>
        </Media>
        <Media>
          <Media.Image></Media.Image>
          <Media.Content>
            <Heading>Operations</Heading>
            <Text>
              Ladies and gentleman, boys and girls, children of all ages,
              Degeneration X, proudly brings to you, your WWF TAG TEAM CHAMPIONS
              OF THE WORLD!
            </Text>
          </Media.Content>
        </Media>
      </Tiles>
    </Container>
  );
};

export const AlternatingLayout = () => {
  return (
    <Container>
      <Text>Features</Text>
      <Text>Beautiful analytics to grow smarter</Text>
      <Text>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </Text>
      <SplitLayout>
        <Text>Share team inboxes</Text>
        <Text>
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </Text>
      </SplitLayout>
    </Container>
  );
};
