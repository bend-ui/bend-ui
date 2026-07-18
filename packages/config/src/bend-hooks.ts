import type { PandaHooks } from '@pandacss/types';

/**
 * Hooks Bend UI needs composed into every consumer config. Panda presets
 * cannot carry hooks, so config-level Bend hooks live here. V0 ships the
 * composition seam without any hook behavior.
 */
export const bendHooks: Partial<PandaHooks> = {};
