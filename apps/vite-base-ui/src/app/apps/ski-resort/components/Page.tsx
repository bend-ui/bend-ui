import {
  Box,
  Button,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@bend-ui/base-ui';
import { MoreHorizontalIcon } from 'lucide-react';

export type Tone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const toneTokens: Record<
  Tone,
  { text: string; fill: string; stroke: string }
> = {
  success: {
    text: 'text.success',
    fill: 'fill.success.weak',
    stroke: 'stroke.success.weak',
  },
  warning: {
    text: 'text.warning',
    fill: 'fill.warning.weak',
    stroke: 'stroke.warning.weak',
  },
  danger: {
    text: 'text.danger',
    fill: 'fill.danger.weak',
    stroke: 'stroke.danger.weak',
  },
  info: {
    text: 'text.info',
    fill: 'fill.info.weak',
    stroke: 'stroke.info.weak',
  },
  neutral: {
    text: 'fg.muted',
    fill: 'fill.weak',
    stroke: 'stroke.weak',
  },
};

export const Page = (props: {
  eyebrow: string;
  title: string;
  description: string;
  action?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      minH="100vh"
      p={{ base: '4', md: '6' }}
      bg="bg.page"
      color="fg.default"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      <Stack gap="6">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap="4"
        >
          <Stack gap="1">
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              color="fg.muted"
              textTransform="uppercase"
              letterSpacing="0"
            >
              {props.eyebrow}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              lineHeight="1.1"
              style={{ textWrap: 'balance' }}
            >
              {props.title}
            </Heading>
            <Text
              as="p"
              color="fg.muted"
              maxW="68ch"
              style={{ textWrap: 'pretty' }}
            >
              {props.description}
            </Text>
          </Stack>
          {props.action ? <Button>{props.action}</Button> : null}
        </Stack>

        {props.children}
      </Stack>
    </Box>
  );
};

export const Surface = (props: { children: React.ReactNode }) => {
  return (
    <Box
      bg="bg.raised"
      border="border.weak"
      borderRadius="8px"
      p="4"
    >
      {props.children}
    </Box>
  );
};

export const Metric = (props: {
  label: string;
  value: string;
  detail: string;
  tone?: Tone;
}) => {
  const tone = toneTokens[props.tone ?? 'neutral'];

  return (
    <Surface>
      <Stack gap="2">
        <Text as="span" color="fg.muted" fontSize="sm" fontWeight="medium">
          {props.label}
        </Text>
        <Text
          as="strong"
          color={tone.text}
          fontSize="3xl"
          lineHeight="1"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {props.value}
        </Text>
        <Text as="span" color="fg.muted" fontSize="sm">
          {props.detail}
        </Text>
      </Stack>
    </Surface>
  );
};

export const StatusPill = (props: { children: React.ReactNode; tone?: Tone }) => {
  const tone = toneTokens[props.tone ?? 'neutral'];

  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      minH="28px"
      px="2"
      borderRadius="999px"
      border="border.weak"
      borderColor={tone.stroke}
      bg={tone.fill}
      color={tone.text}
      fontSize="xs"
      fontWeight="semibold"
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {props.children}
    </Box>
  );
};

export const PanelHeader = (props: {
  title: string;
  description?: string;
}) => {
  return (
    <Stack direction="row" justify="space-between" align="start" gap="3">
      <Stack gap="1">
        <Heading as="h2" fontSize="xl">
          {props.title}
        </Heading>
        {props.description ? (
          <Text as="p" color="fg.muted" fontSize="sm">
            {props.description}
          </Text>
        ) : null}
      </Stack>
      <IconButton icon={<MoreHorizontalIcon />}>More</IconButton>
    </Stack>
  );
};

export const ResponsiveGrid = (props: {
  min?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      display="grid"
      gap="4"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${props.min ?? '220px'}, 1fr))`,
      }}
    >
      {props.children}
    </Box>
  );
};
