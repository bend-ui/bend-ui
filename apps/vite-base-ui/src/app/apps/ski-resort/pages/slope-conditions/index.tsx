import { Box, Heading, Stack, Text } from '@bend-ui/base-ui';
import { MountainSnowIcon, ThermometerSnowflakeIcon, WindIcon } from 'lucide-react';
import { resortStats, terrainZones, weatherTimeline } from 'demo-data';
import {
  Metric,
  Page,
  PanelHeader,
  ResponsiveGrid,
  StatusPill,
  Surface,
  Tone,
} from '../../components/Page';

export const SlopeConditions = () => {
  return (
    <Page
      eyebrow="Mountain report"
      title="Slope Conditions"
      description="Monitor terrain openings, grooming notes, snow quality, and patrol risk across the resort before guests move through the mountain."
      action="Publish report"
    >
      <ResponsiveGrid>
        <Metric
          label="Open terrain"
          value={`${resortStats.openRuns}/${resortStats.totalRuns}`}
          detail="Runs available today"
          tone="success"
        />
        <Metric
          label="Snow base"
          value={resortStats.snowBase}
          detail={`${resortStats.freshSnow} fresh in 24h`}
          tone="info"
        />
        <Metric
          label="Temperature"
          value={resortStats.temperature}
          detail="Summit reading"
          tone="neutral"
        />
        <Metric
          label="Ridge wind"
          value={resortStats.wind}
          detail="Hold threshold at 42 km/h"
          tone="warning"
        />
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
              title="Terrain Zones"
              description="Operational readiness by zone and difficulty."
            />
            <Stack gap="3">
              {terrainZones.map((zone) => (
                <Box
                  key={zone.zone}
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
                      {zone.zone}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {zone.difficulty} terrain
                    </Text>
                  </Stack>
                  <Text fontSize="sm">{zone.runs}</Text>
                  <Text color="fg.muted" fontSize="sm">
                    {zone.grooming}
                  </Text>
                  <StatusPill tone={zone.tone as Tone}>{zone.avalanche}</StatusPill>
                  <Text
                    color="fg.muted"
                    fontSize="sm"
                    style={{ gridColumn: '1 / -1' }}
                  >
                    Patrol note: {zone.patrol}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Surface>

        <Stack gap="5">
          <Surface>
            <Stack gap="4">
              <PanelHeader title="Weather Window" />
              {weatherTimeline.map((item) => (
                <Stack
                  key={item.time}
                  direction="row"
                  justify="space-between"
                  align="center"
                  gap="3"
                >
                  <Stack gap="1">
                    <Text fontWeight="semibold">{item.time}</Text>
                    <Text color="fg.muted" fontSize="sm">
                      {item.condition}
                    </Text>
                  </Stack>
                  <Stack align="end" gap="1">
                    <Text fontSize="sm">{item.temp}</Text>
                    <Text color="fg.muted" fontSize="sm">
                      {item.visibility}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Surface>

          <Surface>
            <Stack gap="3">
              <Stack direction="row" gap="2" align="center">
                <MountainSnowIcon />
                <Text fontWeight="semibold">Grooming priority</Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <ThermometerSnowflakeIcon />
                <Text color="fg.muted" fontSize="sm">
                  Protect beginner routes before the 10:30 lesson wave.
                </Text>
              </Stack>
              <Stack direction="row" gap="2" align="center">
                <WindIcon />
                <Text color="fg.muted" fontSize="sm">
                  Reassess summit ridge gates after noon wind reading.
                </Text>
              </Stack>
            </Stack>
          </Surface>
        </Stack>
      </Box>
    </Page>
  );
};
