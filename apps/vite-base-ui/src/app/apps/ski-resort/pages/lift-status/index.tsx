import { Box, Heading, Stack, Text } from '@bend-ui/base-ui';
import { CableIcon, ClockIcon, WrenchIcon } from 'lucide-react';
import { lifts, maintenanceQueue } from '../../data';
import {
  Metric,
  Page,
  PanelHeader,
  ResponsiveGrid,
  StatusPill,
  Surface,
  Tone,
} from '../../components/Page';

const liftTone = {
  open: 'success',
  hold: 'warning',
  closed: 'danger',
} as const;

export const LiftStatus = () => {
  const openLifts = lifts.filter((lift) => lift.tone === 'open').length;
  const heldLifts = lifts.filter((lift) => lift.tone === 'hold').length;
  const closedLifts = lifts.filter((lift) => lift.tone === 'closed').length;

  return (
    <Page
      eyebrow="Lift operations"
      title="Lift Status"
      description="Track passenger flow, lift readiness, maintenance ownership, and operational holds from the lift operations desk."
      action="Update status"
    >
      <ResponsiveGrid>
        <Metric label="Open lifts" value={openLifts.toString()} detail={`${lifts.length} total lifts`} tone="success" />
        <Metric label="Active holds" value={heldLifts.toString()} detail="Weather or safety holds" tone="warning" />
        <Metric label="Closed lifts" value={closedLifts.toString()} detail="Maintenance required" tone="danger" />
        <Metric label="Avg wait" value="4 min" detail="Across open base lifts" tone="info" />
      </ResponsiveGrid>

      <Box
        display="grid"
        gap="5"
        alignItems="start"
        style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 380px)' }}
      >
        <Surface>
          <Stack gap="4">
            <PanelHeader
              title="Lift Board"
              description="Live lift state and staffing coverage."
            />
            <Stack gap="3">
              {lifts.map((lift) => (
                <Box
                  key={lift.name}
                  display="grid"
                  alignItems="center"
                  gap="3"
                  p="3"
                  bg="bg.default"
                  border="border.weak"
                  borderRadius="8px"
                  style={{
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(120px, 1fr))',
                  }}
                >
                  <Stack gap="1">
                    <Heading as="h3" fontSize="md">
                      {lift.name}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      Crew: {lift.crew}
                    </Text>
                  </Stack>
                  <StatusPill tone={liftTone[lift.tone] as Tone}>{lift.status}</StatusPill>
                  <Text fontSize="sm">{lift.wait}</Text>
                  <Text color="fg.muted" fontSize="sm">
                    {lift.capacity}
                  </Text>
                  <Text
                    color="fg.muted"
                    fontSize="sm"
                    style={{ gridColumn: '1 / -1' }}
                  >
                    Last safety check: {lift.lastCheck}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Surface>

        <Stack gap="5">
          <Surface>
            <Stack gap="4">
              <PanelHeader title="Maintenance Queue" />
              {maintenanceQueue.map((item) => (
                <Stack key={item.asset} gap="1">
                  <Stack direction="row" justify="space-between" gap="3">
                    <Text fontWeight="semibold">{item.asset}</Text>
                    <StatusPill tone={item.priority === 'Active' ? 'warning' : 'info'}>
                      {item.priority}
                    </StatusPill>
                  </Stack>
                  <Text color="fg.muted" fontSize="sm">
                    {item.lift} · {item.owner}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Surface>

          <Surface>
            <Stack gap="3">
              <Stack direction="row" gap="2" align="center">
                <CableIcon />
                <Text fontWeight="semibold">Dispatch posture</Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <ClockIcon />
                <Text color="fg.muted" fontSize="sm">
                  Rebalance maze attendants to Eagle Express after 10:00.
                </Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <WrenchIcon />
                <Text color="fg.muted" fontSize="sm">
                  Mechanical team is triaging North Ridge before lunch service.
                </Text>
              </Stack>
            </Stack>
          </Surface>
        </Stack>
      </Box>
    </Page>
  );
};
