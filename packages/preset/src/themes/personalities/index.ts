import { asterPersonality } from './aster';
import { canopyPersonality } from './canopy';
import type { ThemePersonality } from './contract';
import { nebulaPersonality } from './nebula';
import { solsticePersonality } from './solstice';
import { stratusPersonality } from './stratus';
import { voltPersonality } from './volt';

const definitions = [
  stratusPersonality,
  solsticePersonality,
  voltPersonality,
  nebulaPersonality,
  canopyPersonality,
  asterPersonality,
] as const satisfies readonly ThemePersonality[];

export type ThemePersonalityName = (typeof definitions)[number]['id'];

type ThemePersonalityRegistry = {
  readonly [Personality in (typeof definitions)[number] as Personality['id']]: Personality;
};

const createRegistry = () => {
  const registry: Record<string, ThemePersonality> = {};

  for (const personality of definitions) {
    if (Object.prototype.hasOwnProperty.call(registry, personality.id)) {
      throw new Error(`Duplicate Theme personality id: ${personality.id}`);
    }

    registry[personality.id] = personality;
  }

  return Object.freeze(registry) as ThemePersonalityRegistry;
};

export const themePersonalities = createRegistry();

export const themePersonalityIds = Object.freeze(
  definitions.map(({ id }) => id),
) as readonly ThemePersonalityName[];

export {
  defineThemePersonality,
  type ThemePersonality,
} from './contract';
