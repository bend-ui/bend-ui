import { Box, Heading, Stack, Text } from '@bend-ui/base-ui';
import { AlertTriangleIcon, RadioIcon, ShieldCheckIcon } from 'lucide-react';
import { incidents, radioLog } from '../../data';
import {
  Metric,
  Page,
  PanelHeader,
  ResponsiveGrid,
  StatusPill,
  Surface,
} from '../../components/Page';

export const Incidents = () => {
  return (
    <Page
      eyebrow="Patrol command"
      title="Incidents"
      description="Coordinate active patrol cases, facilities issues, radio updates, and guest safety response from one operational board."
      action="Log incident"
    >
      <ResponsiveGrid>
        <Metric label="Active incidents" value={incidents.length.toString()} detail="All teams acknowledged" tone="warning" />
        <Metric label="Medical cases" value="1" detail="Transport in progress" tone="danger" />
        <Metric label="Response SLA" value="8 min" detail="Average acknowledgement" tone="success" />
        <Metric label="Open channels" value="3" detail="Patrol, lift ops, guest services" tone="info" />
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
              title="Response Board"
              description="Active safety and facilities incidents."
            />
            <Stack gap="3">
              {incidents.map((incident) => (
                <Box
                  key={incident.id}
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
                  <Text color="fg.muted" fontSize="sm" fontWeight="semibold">
                    {incident.id}
                  </Text>
                  <Stack gap="1">
                    <Heading as="h3" fontSize="md">
                      {incident.title}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {incident.owner} · updated {incident.updated}
                    </Text>
                  </Stack>
                  <StatusPill tone={incident.severity === 'Medical' ? 'danger' : 'warning'}>
                    {incident.severity}
                  </StatusPill>
                  <Text fontSize="sm">{incident.status}</Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Surface>

        <Stack gap="5">
          <Surface>
            <Stack gap="4">
              <PanelHeader title="Radio Log" />
              {radioLog.map((entry) => (
                <Stack key={`${entry.time}-${entry.channel}`} gap="1">
                  <Stack direction="row" justify="space-between" gap="3">
                    <Text fontWeight="semibold">{entry.time}</Text>
                    <StatusPill tone="neutral">{entry.channel}</StatusPill>
                  </Stack>
                  <Text color="fg.muted" fontSize="sm">
                    {entry.note}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Surface>

          <Surface>
            <Stack gap="3">
              <Stack direction="row" gap="2" align="center">
                <AlertTriangleIcon />
                <Text fontWeight="semibold">Command priorities</Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <RadioIcon />
                <Text color="fg.muted" fontSize="sm">
                  Keep guest services updated until family reunification closes.
                </Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <ShieldCheckIcon />
                <Text color="fg.muted" fontSize="sm">
                  Patrol lead owns ridge gate clearance before reopening.
                </Text>
              </Stack>
            </Stack>
          </Surface>
        </Stack>
      </Box>
    </Page>
  );
};
