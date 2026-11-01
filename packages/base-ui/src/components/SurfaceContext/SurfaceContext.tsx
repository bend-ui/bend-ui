'use client';

import * as React from 'react';

export type SurfaceLevel = 'page' | 'raised' | 'overlay';
export type SurfaceAppearance = Pick<
  React.CSSProperties,
  'backgroundColor' | 'color' | 'borderColor' | 'boxShadow'
>;
export interface SurfaceProviderProps {
  children?: React.ReactNode;
  level?: SurfaceLevel;
  surfaces?: Partial<Record<SurfaceLevel, SurfaceAppearance>>;
  /** Explicit Panda Theme scope to replay on portalled surfaces. */
  theme?: string;
  /** Explicit color mode to replay; no ambient DOM styles are read. */
  colorMode?: 'light' | 'dark';
}

interface SurfaceScope {
  level: SurfaceLevel;
  surfaces: Partial<Record<SurfaceLevel, SurfaceAppearance>>;
  theme?: string;
  colorMode?: 'light' | 'dark';
}

const SurfaceContext = React.createContext<SurfaceScope | null>(null);

/** Logical visual scope survives React portals without changing stacking order. */
export function SurfaceProvider({
  children,
  level,
  surfaces,
  theme,
  colorMode,
}: SurfaceProviderProps) {
  const parent = React.useContext(SurfaceContext);
  const scope = React.useMemo<SurfaceScope>(
    () => ({
      level: level ?? parent?.level ?? 'page',
      surfaces: {
        page: { ...parent?.surfaces.page, ...surfaces?.page },
        raised: { ...parent?.surfaces.raised, ...surfaces?.raised },
        overlay: { ...parent?.surfaces.overlay, ...surfaces?.overlay },
      },
      theme: theme ?? parent?.theme,
      colorMode: colorMode ?? parent?.colorMode,
    }),
    [parent, level, surfaces, theme, colorMode],
  );
  return (
    <SurfaceContext.Provider value={scope}>{children}</SurfaceContext.Provider>
  );
}

/** Resolve a new visual level from React ancestry, without DOM access on SSR. */
export function useSurfaceScope(level?: SurfaceLevel, enabled = false) {
  const parent = React.useContext(SurfaceContext);
  if (!parent && !enabled && level === undefined) return null;
  return {
    ...parent,
    surfaces: parent?.surfaces ?? {},
    level:
      level ??
      (parent?.level === 'page' ? 'raised' : parent ? 'overlay' : 'raised'),
  } satisfies SurfaceScope;
}

export function SurfaceScopeProvider({
  scope,
  children,
}: {
  scope: SurfaceScope | null;
  children: React.ReactNode;
}) {
  return scope ? (
    <SurfaceContext.Provider value={scope}>{children}</SurfaceContext.Provider>
  ) : (
    children
  );
}

/** Reapply selected semantic tokens locally; consumer styles retain precedence. */
export function contextualSurfaceProps<State>(
  scope: SurfaceScope | null,
  props: {
    className?: string | ((state: State) => string | undefined);
    style?:
      | React.CSSProperties
      | ((state: State) => React.CSSProperties | undefined);
  },
): {
  'data-surface-level'?: SurfaceLevel;
  'data-panda-theme'?: string;
  className?: string | ((state: State) => string | undefined);
  style?:
    | React.CSSProperties
    | ((state: State) => React.CSSProperties | undefined);
} {
  if (!scope) return {};
  const appearance: SurfaceAppearance = {
    backgroundColor: `var(--colors-bg-${scope.level})`,
    color: 'var(--colors-text)',
    borderColor: 'var(--colors-stroke)',
    boxShadow: scope.level === 'page' ? 'none' : 'var(--shadows-md)',
    ...scope.surfaces[scope.level],
  };
  const className = (value?: string) =>
    [scope.colorMode, value].filter(Boolean).join(' ') || undefined;
  return {
    'data-surface-level': scope.level,
    ...(scope.theme === undefined ? {} : { 'data-panda-theme': scope.theme }),
    className:
      typeof props.className === 'function'
        ? (state: State) =>
            className(
              (props.className as (state: State) => string | undefined)(state),
            )
        : className(props.className),
    style:
      typeof props.style === 'function'
        ? (state: State) => ({
            ...appearance,
            ...(
              props.style as (state: State) => React.CSSProperties | undefined
            )(state),
          })
        : { ...appearance, ...props.style },
  };
}
