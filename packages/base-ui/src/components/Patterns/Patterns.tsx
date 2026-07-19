import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { styled } from '@bend-ui/styled-system/jsx';
import { cx } from '@bend-ui/styled-system/css';
import {
  actionItem,
  metric,
  pageHeader,
  panelHeader,
  responsiveGrid,
  surface,
  timelineItem,
} from '@bend-ui/styled-system/recipes';
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
  const { children, className, elevation = 'none', ...rest } = props;
  return (
    <Box className={cx(surface({ elevation }), className)} {...rest}>
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
    className,
    tone = 'neutral',
    trend,
    value,
    ...rest
  } = props;
  return (
    <Surface className={cx(metric(), className)} {...rest}>
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
  const { action, className, description, eyebrow, title, ...rest } = props;
  return (
    <Stack className={cx(pageHeader(), className)} {...rest}>
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
  const { action, className, description, title, ...rest } = props;
  return (
    <Stack className={cx(panelHeader(), className)} {...rest}>
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
  const { children, className, min = '220px', style, ...rest } = props;
  return (
    <Box
      className={cx(responsiveGrid(), className)}
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
    className,
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
    <Stack className={cx(timelineItem(), className)} {...rest}>
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
  const { children, className, description, icon, ...rest } = props;
  return (
    <ActionButton
      type="button"
      className={cx(actionItem(), className)}
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
