import { Box, Heading, Stack, Text } from '@bend-ui/base-ui';
import { CalendarCheckIcon, ClipboardCheckIcon, UsersRoundIcon } from 'lucide-react';
import { eventTasks, events } from '../../data';
import {
  Metric,
  Page,
  PanelHeader,
  ResponsiveGrid,
  StatusPill,
  Surface,
} from '../../components/Page';

export const Events = () => {
  return (
    <Page
      eyebrow="Guest programming"
      title="Events"
      description="Coordinate on-mountain events, venue readiness, staffing ownership, and guest capacity for today&apos;s programming."
      action="Create event"
    >
      <ResponsiveGrid>
        <Metric label="Events today" value={events.length.toString()} detail="Across village and mountain" tone="info" />
        <Metric label="Reserved guests" value="108" detail="Includes racers and clinics" tone="success" />
        <Metric label="Open tasks" value={eventTasks.length.toString()} detail="Before first check-in" tone="warning" />
        <Metric label="Venue conflicts" value="0" detail="No overlaps detected" tone="success" />
      </ResponsiveGrid>

      <Box
        display="grid"
        gap="5"
        alignItems="start"
        style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 360px)' }}
      >
        <Surface>
          <Stack gap="4">
            <PanelHeader
              title="Schedule"
              description="Capacity, location, and owner for active events."
            />
            <Stack gap="3">
              {events.map((event) => (
                <Box
                  key={event.title}
                  display="grid"
                  gap="3"
                  alignItems="center"
                  p="3"
                  bg="bg.default"
                  border="border.weak"
                  borderRadius="8px"
                  style={{
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(130px, 1fr))',
                  }}
                >
                  <Stack gap="1">
                    <Heading as="h3" fontSize="md">
                      {event.title}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {event.location}
                    </Text>
                  </Stack>
                  <Text fontWeight="semibold">{event.time}</Text>
                  <Text color="fg.muted" fontSize="sm">
                    {event.owner}
                  </Text>
                  <StatusPill tone="info">{event.capacity}</StatusPill>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Surface>

        <Stack gap="5">
          <Surface>
            <Stack gap="4">
              <PanelHeader title="Production Tasks" />
              {eventTasks.map((task, index) => (
                <Stack key={task} direction="row" gap="3" align="start">
                  <StatusPill tone={index < 2 ? 'warning' : 'neutral'}>
                    {index + 1}
                  </StatusPill>
                  <Text fontSize="sm">{task}</Text>
                </Stack>
              ))}
            </Stack>
          </Surface>

          <Surface>
            <Stack gap="3">
              <Stack direction="row" gap="2" align="center">
                <CalendarCheckIcon />
                <Text fontWeight="semibold">Readiness brief</Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <ClipboardCheckIcon />
                <Text color="fg.muted" fontSize="sm">
                  Race course inspection is the only blocker before guest arrival.
                </Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <UsersRoundIcon />
                <Text color="fg.muted" fontSize="sm">
                  Guest services should staff two check-in lanes after 17:00.
                </Text>
              </Stack>
            </Stack>
          </Surface>
        </Stack>
      </Box>
    </Page>
  );
};
