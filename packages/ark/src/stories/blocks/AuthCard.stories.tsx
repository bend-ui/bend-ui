import {
  Heading,
  Stack,
  Card,
  Paragraph,
  Button,
  Text,
  Box,
} from '@bend-ui/react';
import { Meta } from '@storybook/react-vite';
import { Field } from '../../components';

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
          <Heading variant="title">Welcome!</Heading>
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
        <Button isFull palette="primary">
          Sign in
        </Button>
        <Text textStyle="body.sm">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </Text>
      </Stack>
    </Card>
  );
};
