'use client';

import {
  namedThemeColors,
  themePersonalities,
  type ThemePersonalityName,
} from '@bend-ui/preset';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { css } from '../styled-system/css/index.mjs';

const personalityIds = Object.keys(themePersonalities) as Array<
  keyof typeof themePersonalities
>;

type Variant = 'header' | 'sidebar' | 'palette';

const variants: Array<{ id: Variant; label: string }> = [
  { id: 'header', label: 'Header popover' },
  { id: 'sidebar', label: 'Sidebar panel' },
  { id: 'palette', label: 'Floating palette' },
];

const personalityStorageKey = 'bend-ui-theme-personality';

const isPersonalityName = (value: string | null): value is ThemePersonalityName =>
  value !== null && value in themePersonalities;

const getStoredPersonality = (): ThemePersonalityName => {
  if (typeof window === 'undefined') return 'stratus';
  const stored = window.localStorage.getItem(personalityStorageKey);
  return isPersonalityName(stored) ? stored : 'stratus';
};

const personalityChangeEvent = 'bend-ui-theme-personality-change';

const subscribeToPersonality = (onChange: () => void) => {
  window.addEventListener(personalityChangeEvent, onChange);
  return () => window.removeEventListener(personalityChangeEvent, onChange);
};

const getInitialVariant = (): Variant => {
  if (typeof window === 'undefined') return 'header';
  const value = new URLSearchParams(window.location.search).get('variant');
  return variants.some((variant) => variant.id === value)
    ? (value as Variant)
    : 'header';
};

const updateVariantUrl = (variant: Variant) => {
  const url = new URL(window.location.href);
  url.searchParams.set('variant', variant);
  window.history.replaceState({}, '', url);
};

const ThemeSwatch = ({ id }: { id: keyof typeof themePersonalities }) => {
  const personality = themePersonalities[id];
  const primary = namedThemeColors[personality.primary];
  const secondary = namedThemeColors[personality.secondary];

  return (
    <span
      aria-hidden="true"
      className={css({
        display: 'inline-flex',
        width: '8',
        height: '5',
        overflow: 'hidden',
        borderRadius: 'sm',
        boxShadow: '0 0 0 1px rgb(0 0 0 / 14%)',
      })}
    >
      <span className={css({ flex: '1' })} style={{ background: primary.source }} />
      <span className={css({ flex: '1' })} style={{ background: secondary.source }} />
    </span>
  );
};

const ThemeOption = ({
  id,
  selected,
  onSelect,
}: {
  id: keyof typeof themePersonalities;
  selected: boolean;
  onSelect: (id: keyof typeof themePersonalities) => void;
}) => {
  const personality = themePersonalities[id];

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={(event) => {
        onSelect(id);
        event.currentTarget.closest('details')?.removeAttribute('open');
      }}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '3',
        width: '100%',
        minHeight: '11',
        paddingInline: '3',
        border: '0',
        borderRadius: 'md',
        color: 'fg.default',
        textAlign: 'left',
        cursor: 'pointer',
        transitionProperty: 'background-color, color, transform',
        transitionDuration: 'fast',
        background: selected ? 'fill.muted' : 'transparent',
        _hover: { background: 'fill.hover' },
        _active: { transform: 'scale(0.96)' },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'stroke.primary',
          outlineOffset: '2px',
        },
      })}
    >
      <ThemeSwatch id={id} />
      <span className={css({ display: 'grid', gap: '0.5', minWidth: '0' })}>
        <strong>{personality.name}</strong>
        <span className={css({ color: 'fg.muted', fontSize: 'xs', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' })}>
          {personality.description}
        </span>
      </span>
    </button>
  );
};

const HeaderVariant = ({
  selected,
  onSelect,
}: {
  selected: keyof typeof themePersonalities;
  onSelect: (id: keyof typeof themePersonalities) => void;
}) => {
  const personality = themePersonalities[selected];

  return (
    <details className={css({ position: 'relative', width: { base: '100%', sm: 'auto' } })}>
      <summary
        aria-label={`Theme personality: ${personality.name}`}
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3',
          minHeight: '12',
          paddingInline: '3',
          border: 'border.weak',
          borderRadius: 'lg',
          cursor: 'pointer',
          listStyle: 'none',
          _focusVisible: { outline: '2px solid', outlineColor: 'stroke.primary', outlineOffset: '2px' },
        })}
      >
        <span className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <ThemeSwatch id={selected} />
          <span>{personality.name}</span>
        </span>
        <span aria-hidden="true">⌄</span>
      </summary>
      <div
        className={css({
          position: 'absolute',
          right: '0',
          zIndex: '10',
          display: 'grid',
          gap: '1',
          width: { base: '100%', sm: '18rem' },
          marginTop: '2',
          padding: '2',
          border: 'border.weak',
          borderRadius: 'lg',
          background: 'bg.page',
          boxShadow: '0 16px 40px rgb(0 0 0 / 14%)',
        })}
      >
        {personalityIds.map((id) => (
          <ThemeOption key={id} id={id} selected={selected === id} onSelect={onSelect} />
        ))}
      </div>
    </details>
  );
};

const SidebarVariant = ({
  selected,
  onSelect,
}: {
  selected: keyof typeof themePersonalities;
  onSelect: (id: keyof typeof themePersonalities) => void;
}) => (
  <aside
    className={css({
      display: { base: 'none', md: 'grid' },
      alignContent: 'start',
      gap: '3',
      width: '14rem',
      flexShrink: '0',
      padding: '3',
      border: 'border.weak',
      borderRadius: 'lg',
      background: 'bg.subtle',
    })}
    aria-label="Theme personality switcher"
  >
    <div className={css({ display: 'grid', gap: '1' })}>
      <strong>Theme personality</strong>
      <span className={css({ color: 'fg.muted', fontSize: 'xs' })}>Compare the six identities.</span>
    </div>
    <div className={css({ display: 'grid', gap: '1' })} role="radiogroup" aria-label="Theme personality">
      {personalityIds.map((id) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={selected === id}
          onClick={() => onSelect(id)}
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
            minHeight: '10',
            paddingInline: '2',
            border: '0',
            borderRadius: 'md',
            background: selected === id ? 'fill.muted' : 'transparent',
            color: 'fg.default',
            textAlign: 'left',
            cursor: 'pointer',
            _hover: { background: 'fill.hover' },
            _focusVisible: { outline: '2px solid', outlineColor: 'stroke.primary', outlineOffset: '2px' },
          })}
        >
          <ThemeSwatch id={id} />
          <span>{themePersonalities[id].name}</span>
        </button>
      ))}
    </div>
  </aside>
);

const PaletteVariant = ({
  selected,
  onSelect,
}: {
  selected: keyof typeof themePersonalities;
  onSelect: (id: keyof typeof themePersonalities) => void;
}) => (
  <div
    className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      maxWidth: '100%',
      overflowX: 'auto',
      padding: '2',
      border: 'border.weak',
      borderRadius: 'full',
      background: 'bg.page/92',
      boxShadow: '0 8px 24px rgb(0 0 0 / 12%)',
      backdropFilter: 'blur(12px)',
    })}
    aria-label="Theme personality switcher"
  >
    {personalityIds.map((id) => (
      <button
        key={id}
        type="button"
        aria-label={themePersonalities[id].name}
        aria-pressed={selected === id}
        onClick={() => onSelect(id)}
        className={css({
          display: 'inline-flex',
          flexShrink: '0',
          width: '8',
          height: '8',
          padding: '0',
          border: selected === id ? '2px solid' : '1px solid',
          borderColor: selected === id ? 'stroke.primary' : 'border.weak',
          borderRadius: 'full',
          cursor: 'pointer',
          _focusVisible: { outline: '2px solid', outlineColor: 'stroke.primary', outlineOffset: '2px' },
        })}
      >
        <ThemeSwatch id={id} />
      </button>
    ))}
  </div>
);

export const ThemePersonalitySwitcherPrototype = () => {
  const [variant, setVariant] = useState<Variant>(getInitialVariant);
  const [selected, setSelected] = useState<keyof typeof themePersonalities>('stratus');
  const currentIndex = variants.findIndex((item) => item.id === variant);

  useEffect(() => {
    document.documentElement.dataset.pandaTheme = selected;
  }, [selected]);

  useEffect(() => {
    const onPopState = () => setVariant(getInitialVariant());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const currentVariant = useMemo(() => variants[currentIndex] ?? variants[0], [currentIndex]);
  const onSelectVariant = (next: Variant) => {
    setVariant(next);
    updateVariantUrl(next);
  };
  const onSelectTheme = (next: keyof typeof themePersonalities) => setSelected(next);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = variants[(currentIndex + direction + variants.length) % variants.length];
      onSelectVariant(next.id);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentIndex]);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <section
      className={css({
        display: 'grid',
        gap: '4',
        marginBottom: '8',
        padding: { base: '4', md: '5' },
        border: '1px dashed',
        borderColor: 'stroke.primary',
        borderRadius: 'xl',
        background: 'bg.subtle',
      })}
      aria-label="Theme personality switcher prototype"
    >
      <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '3' })}>
        <div className={css({ display: 'grid', gap: '1' })}>
          <strong>Switcher prototype</strong>
          <span className={css({ color: 'fg.muted', fontSize: 'sm' })}>
            Personality: {themePersonalities[selected].name}. Color mode remains independent in the header.
          </span>
        </div>
        <div className={css({ width: { base: '100%', sm: 'auto' } })}>
          {variant === 'header' ? (
            <HeaderVariant selected={selected} onSelect={onSelectTheme} />
          ) : null}
        </div>
      </div>
      {variant === 'sidebar' ? (
        <div className={css({ display: 'flex', gap: '4', alignItems: 'start' })}>
          <SidebarVariant selected={selected} onSelect={onSelectTheme} />
          <p className={css({ margin: '0', color: 'fg.muted', fontSize: 'sm' })}>
            Desktop keeps the catalog comparison visible while the personality control stays in a persistent rail.
          </p>
        </div>
      ) : null}
      {variant === 'palette' ? (
        <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <PaletteVariant selected={selected} onSelect={onSelectTheme} />
        </div>
      ) : null}
      <div
        className={css({
          position: 'fixed',
          right: '4',
          bottom: '4',
          zIndex: '20',
          display: 'flex',
          alignItems: 'center',
          gap: '2',
          maxWidth: 'calc(100vw - 2rem)',
          padding: '2',
          border: 'border.strong',
          borderRadius: 'full',
          background: 'bg.page',
          boxShadow: '0 12px 32px rgb(0 0 0 / 18%)',
        })}
      >
        <button type="button" aria-label="Previous switcher composition" onClick={() => onSelectVariant(variants[(currentIndex - 1 + variants.length) % variants.length].id)} className={css({ minWidth: '8', minHeight: '8', border: '0', borderRadius: 'full', cursor: 'pointer' })}>
          ←
        </button>
        <span className={css({ minWidth: '8rem', textAlign: 'center', fontSize: 'xs', fontWeight: 'semibold' })}>
          {currentVariant.label}
        </span>
        <button type="button" aria-label="Next switcher composition" onClick={() => onSelectVariant(variants[(currentIndex + 1) % variants.length].id)} className={css({ minWidth: '8', minHeight: '8', border: '0', borderRadius: 'full', cursor: 'pointer' })}>
          →
        </button>
      </div>
    </section>
  );
};

export const ThemePersonalitySwitcher = () => {
  const selected = useSyncExternalStore(
    subscribeToPersonality,
    getStoredPersonality,
    () => 'stratus' as ThemePersonalityName,
  );

  useEffect(() => {
    document.documentElement.dataset.pandaTheme = selected;
  }, [selected]);

  const onSelect = (next: ThemePersonalityName) => {
    window.localStorage.setItem(personalityStorageKey, next);
    window.dispatchEvent(new Event(personalityChangeEvent));
  };

  return <HeaderVariant selected={selected} onSelect={onSelect} />;
};
