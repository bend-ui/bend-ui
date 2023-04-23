import {
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Level,
  Stack,
  Text,
} from '@particles/stitches';

export default function Login() {
  return (
    <Center>
      <Stack>
        <Heading>Log in to your account</Heading>
        <Text>Welcome back! Please enter your details.</Text>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Level>
          <Checkbox>Remember for 30 days</Checkbox>
          <Text>Forgot password</Text>
        </Level>
        <Button isFull>Sign in</Button>
        <Text>
          Don’t have an account? <a href="">Sign up</a>
        </Text>
      </Stack>
    </Center>
  );
}
