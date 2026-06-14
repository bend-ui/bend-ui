import { Box, Heading, Stack, Text } from '@bend-ui/base-ui';
import { BadgeDollarSignIcon, ContactIcon, GraduationCapIcon } from 'lucide-react';
import { clients } from '../../data';
import {
  Metric,
  Page,
  PanelHeader,
  ResponsiveGrid,
  StatusPill,
  Surface,
} from '../../components/Page';

export const Clients = () => {
  return (
    <Page
      eyebrow="Guest services"
      title="Clients"
      description="See priority guests, lodging details, lesson commitments, and commercial follow-ups that need attention today."
      action="Add client"
    >
      <ResponsiveGrid>
        <Metric label="Tracked guests" value={clients.length.toString()} detail="High-touch records" tone="info" />
        <Metric label="Lesson bookings" value="3" detail="One private, two groups" tone="success" />
        <Metric label="Pending waivers" value="1" detail="Before kids lesson" tone="warning" />
        <Metric label="Guest spend" value="$7.5k" detail="Open folios today" tone="success" />
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
              title="Guest Profiles"
              description="Priority records for guest services and sales."
            />
            <Stack gap="3">
              {clients.map((client) => (
                <Box
                  key={client.name}
                  display="grid"
                  gap="3"
                  alignItems="center"
                  p="3"
                  bg="bg.default"
                  border="border.weak"
                  borderRadius="8px"
                  style={{
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(140px, 1fr))',
                  }}
                >
                  <Stack gap="1">
                    <Heading as="h3" fontSize="md">
                      {client.name}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {client.segment}
                    </Text>
                  </Stack>
                  <Text color="fg.muted" fontSize="sm">
                    {client.stay}
                  </Text>
                  <Text color="fg.muted" fontSize="sm">
                    {client.lessons}
                  </Text>
                  <StatusPill tone={client.status.includes('pending') ? 'warning' : 'info'}>
                    {client.status}
                  </StatusPill>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Surface>

        <Stack gap="5">
          <Surface>
            <Stack gap="4">
              <PanelHeader title="Commercial Snapshot" />
              {clients.map((client) => (
                <Stack
                  key={client.name}
                  direction="row"
                  justify="space-between"
                  gap="3"
                  align="center"
                >
                  <Text fontSize="sm">{client.name}</Text>
                  <Text fontWeight="semibold">{client.spend}</Text>
                </Stack>
              ))}
            </Stack>
          </Surface>

          <Surface>
            <Stack gap="3">
              <Stack direction="row" gap="2" align="center">
                <ContactIcon />
                <Text fontWeight="semibold">Service actions</Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <GraduationCapIcon />
                <Text color="fg.muted" fontSize="sm">
                  Confirm Harper Stone waiver before the kids lesson lineup.
                </Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <BadgeDollarSignIcon />
                <Text color="fg.muted" fontSize="sm">
                  Corporate group invoice needs a sales manager review.
                </Text>
              </Stack>
            </Stack>
          </Surface>
        </Stack>
      </Box>
    </Page>
  );
};
