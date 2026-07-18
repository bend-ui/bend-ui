import { Box, Stack, styled } from '@bend-ui/styled-system/jsx';
import { Meta } from '@storybook/react-vite';
import { Button, Field } from '../../components';

const Card = styled('div', {
  base: { layerStyle: 'panel', p: 'lg', rounded: '2xl' },
});
const Heading = styled('h1', {
  base: { fontSize: '2xl', fontWeight: 'bold' },
});
const Paragraph = styled('p', { base: { color: 'text.weak' } });
const Text = styled('span', { base: { fontSize: 'sm' } });

const meta: Meta = {
  title: 'Blocks/AuthCard',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const One = () => {
  return (
    <Card>
      <Stack>
        <Box>
          <Heading>Welcome!</Heading>
          <Paragraph color="red.500">
            Create an account to access your dashboard and settings
          </Paragraph>
        </Box>
        <Field>
          <Field.Label>Email</Field.Label>
          <Field.Input type="email" />
        </Field>
        <Field>
          <Field.Label>Password</Field.Label>
          <Field.Input type="password" />
        </Field>
        <Text textStyle="body.sm">
          Forgot your password? <a href="#">Reset it</a>
        </Text>
        <Button isFull variant="primary">
          Sign in
        </Button>
        <Text textStyle="body.sm">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </Text>
      </Stack>
    </Card>
  );
};
