import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { styled } from '@bend-ui/styled-system/jsx';
import { MoreHorizontalIcon } from 'lucide-react';
import { Badge, type BadgeProps } from '../Badge';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { IconButton } from '../IconButton';
import { Stack } from '../Stack';
import { Text } from '../Text';

const Box = styled('div');
const ActionButton = styled('button');

export type OperationalTone =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

type PatternBoxProps = Omit<ComponentProps<typeof Box>, 'direction' | 'title'>;

export interface SurfaceProps extends PatternBoxProps {
  children?: ReactNode;
  elevation?: 'none' | 'raised';
}

export const Surface = (props: SurfaceProps) => {
  const { children, elevation = 'none', ...rest } = props;
  return (
    <Box
      bg="bg.raised"
      border="border.weak"
      borderRadius="8px"
      boxShadow={elevation === 'raised' ? 'sm' : undefined}
      p="4"
      {...rest}
    >
      {children}
    </Box>
  );
};

export interface MetricProps extends PatternBoxProps {
  detail?: ReactNode;
  icon?: ReactNode;
  label: ReactNode;
  tone?: OperationalTone;
  trend?: ReactNode;
  value: ReactNode;
}

export const Metric = (props: MetricProps) => {
  const {
    detail,
    icon,
    label,
    tone = 'neutral',
    trend,
    value,
    ...rest
  } = props;
  return (
    <Surface {...rest}>
      <Stack gap="3">
        <Stack direction="row" align="center" justify="space-between" gap="3">
          <Text as="span" color="fg.muted" fontSize="sm" fontWeight="medium">
            {label}
          </Text>
          {icon ? (
            <Box color="fg.muted" display="inline-flex">
              {icon}
            </Box>
          ) : null}
        </Stack>
        <Stack gap="1">
          <Text
            as="strong"
            color={tone === 'neutral' ? 'fg.default' : `text.${tone}`}
            fontSize="3xl"
            lineHeight="1"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {value}
          </Text>
          {detail || trend ? (
            <Stack direction="row" align="center" gap="2" flexWrap="wrap">
              {detail ? (
                <Text as="span" color="fg.muted" fontSize="sm">
                  {detail}
                </Text>
              ) : null}
              {trend ? (
                <Badge
                  tone={tone === 'neutral' ? 'info' : tone}
                  variant="subtle"
                >
                  {trend}
                </Badge>
              ) : null}
            </Stack>
          ) : null}
        </Stack>
      </Stack>
    </Surface>
  );
};

export interface PageHeaderProps extends PatternBoxProps {
  action?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { action, description, eyebrow, title, ...rest } = props;
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'stretch', lg: 'center' }}
      justify="space-between"
      gap="4"
      {...rest}
    >
      <Stack gap="1">
        {eyebrow ? (
          <Text
            as="span"
            color="fg.muted"
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {eyebrow}
          </Text>
        ) : null}
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} lineHeight="1.1">
          {title}
        </Heading>
        {description ? (
          <Text as="p" color="fg.muted" maxW="68ch">
            {description}
          </Text>
        ) : null}
      </Stack>
      {typeof action === 'string' ? <Button>{action}</Button> : action}
    </Stack>
  );
};

export interface PanelHeaderProps extends PatternBoxProps {
  action?: ReactNode;
  description?: ReactNode;
  title: ReactNode;
}

export const PanelHeader = (props: PanelHeaderProps) => {
  const { action, description, title, ...rest } = props;
  return (
    <Stack
      direction="row"
      justify="space-between"
      align="start"
      gap="3"
      {...rest}
    >
      <Stack gap="1">
        <Heading as="h2" fontSize="xl">
          {title}
        </Heading>
        {description ? (
          <Text as="p" color="fg.muted" fontSize="sm">
            {description}
          </Text>
        ) : null}
      </Stack>
      {action ?? <IconButton icon={<MoreHorizontalIcon />}>More</IconButton>}
    </Stack>
  );
};

export interface ResponsiveGridProps extends ComponentProps<typeof Box> {
  children?: ReactNode;
  min?: string;
}

export const ResponsiveGrid = (props: ResponsiveGridProps) => {
  const { children, min = '220px', style, ...rest } = props;
  return (
    <Box
      display="grid"
      gap="4"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export interface TimelineItemProps extends PatternBoxProps {
  avatarAlt?: string;
  avatarFallback?: ReactNode;
  avatarSrc?: string;
  description?: ReactNode;
  leading?: ReactNode;
  metadata?: ReactNode;
  status?: BadgeProps['tone'];
  statusLabel?: ReactNode;
  title: ReactNode;
  trailing?: ReactNode;
}

export const TimelineItem = (props: TimelineItemProps) => {
  const {
    avatarAlt,
    avatarFallback,
    avatarSrc,
    description,
    leading,
    metadata,
    status = 'neutral',
    statusLabel,
    title,
    trailing,
    ...rest
  } = props;
  const lead =
    leading ??
    (avatarSrc || avatarFallback ? (
      <Avatar
        alt={avatarAlt}
        fallback={avatarFallback}
        size="sm"
        src={avatarSrc}
      />
    ) : null);

  return (
    <Stack direction="row" align="center" gap="3" py="2" {...rest}>
      {lead}
      <Stack gap="1" flex="1" minW="0">
        <Stack direction="row" align="center" gap="2" flexWrap="wrap">
          <Text as="strong" fontSize="sm">
            {title}
          </Text>
          {metadata ? (
            <Text as="span" color="fg.muted" fontSize="xs">
              {metadata}
            </Text>
          ) : null}
        </Stack>
        {description ? (
          <Text as="span" color="fg.muted" fontSize="sm">
            {description}
          </Text>
        ) : null}
      </Stack>
      {statusLabel ? <Badge tone={status}>{statusLabel}</Badge> : null}
      {trailing}
    </Stack>
  );
};

export interface ActionItemProps extends ComponentProps<typeof ActionButton> {
  children?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}

export const ActionItem = (props: ActionItemProps) => {
  const { children, description, icon, ...rest } = props;
  return (
    <ActionButton
      type="button"
      display="flex"
      alignItems="center"
      gap="3"
      width="full"
      borderRadius="8px"
      padding="3"
      textAlign="left"
      _hover={{ backgroundColor: 'bg.subtle' }}
      {...rest}
    >
      {icon ? <Box display="inline-flex">{icon}</Box> : null}
      <Stack gap="0" flex="1">
        <Text as="span" fontSize="sm" fontWeight="medium">
          {children}
        </Text>
        {description ? (
          <Text as="span" color="fg.muted" fontSize="sm">
            {description}
          </Text>
        ) : null}
      </Stack>
    </ActionButton>
  );
};
