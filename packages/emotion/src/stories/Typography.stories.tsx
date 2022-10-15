import { Badge, Stack, Text } from '../components';

export default {
  title: 'Typography',
};

export const Base = () => {
  const textVariants = [
    'display',
    'headline',
    'title',
    'subtitle',
    'lead',
    'body',
    'small',
    'caption',
  ] as const;

  return (
    <Stack>
      {textVariants.map((variant) => (
        <>
          <Badge>{variant.toUpperCase()}</Badge>
          <Text key={variant} variant={variant}>
            Oooh, what a rush! Rest...in...peace. Train, say your prayers, take
            your vitamins. Beat me if you can, survive if I let you.
          </Text>
        </>
      ))}
    </Stack>
  );
};
