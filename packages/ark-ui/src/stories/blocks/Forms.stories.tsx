import { Box, Center, Stack } from '@bend-ui/styled-system/jsx';
import { styled } from '@bend-ui/styled-system/jsx';
import { Button, Checkbox, Field as FormField, Input } from '../../components';
import type { Meta } from '@storybook/react-vite';

const Heading = styled('h1');
const Paragraph = styled('p');
const Level = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const meta: Meta = {
  title: 'Blocks/Forms',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Signup = () => (
  <Center h="screen" p="md">
    <Box maxW="xl" w="screen">
      <Heading>Welcome!</Heading>
      <Paragraph>
        Create an account to access your dashboard and settings
      </Paragraph>
      <form>
        <Stack gap="lg">
          <FormField>
            <FormField.Label>Email</FormField.Label>
            <Input type="email" />
            <FormField.HelperText>
              We&apos;ll never share your email
            </FormField.HelperText>
          </FormField>
          <FormField>
            <FormField.Label>Password</FormField.Label>
            <Input type="password" />
            <FormField.HelperText>
              Password must be at least 8 characters
            </FormField.HelperText>
          </FormField>
          <Level>
            <Checkbox id="remember" name="remember" />
            <a href="/">Forgot password?</a>
          </Level>
          <Button isFull type="submit">
            Sign up
          </Button>
          <Paragraph textAlign="center">
            Already have an account? <a href="/">Login</a>
          </Paragraph>
        </Stack>
      </form>
    </Box>
  </Center>
);

export const PlanForm = () => (
  <Center h="screen" p="md">
    <Box maxW="xl" w="screen">
      <Heading>Choose your plan</Heading>
      <Paragraph>Select a plan that works for you</Paragraph>
      <form>
        <Stack gap="lg">
          {/* <RadioCard></RadioCard> */}
          <Button isFull type="submit">
            Continue
          </Button>
        </Stack>
      </form>
    </Box>
  </Center>
);
