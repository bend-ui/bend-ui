import {
  namedThemeColors,
  themePersonalities,
  type ThemePersonalityName,
} from '@bend-ui/preset';
import { css } from '../styled-system/css/index.mjs';

const themeEntries = Object.entries(themePersonalities) as Array<
  [ThemePersonalityName, (typeof themePersonalities)[ThemePersonalityName]]
>;

const rampLabels = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export function ThemePersonalityCatalog() {
  return (
    <div
      className={css({
        display: 'grid',
        gap: '8',
        marginBlock: '8',
      })}
    >
      {themeEntries.map(([id, theme]) => {
        const primary = namedThemeColors[theme.primary];
        const secondary = namedThemeColors[theme.secondary];
        const light = namedThemeColors[theme.lightColor];
        const dark = namedThemeColors[theme.darkColor];
        const onPrimary = namedThemeColors[theme.onPrimary.color];

        return (
          <article
            key={id}
            data-panda-theme={id}
            className={css({
              display: 'grid',
              gap: '6',
              padding: { base: '5', md: '7' },
              overflow: 'hidden',
            })}
            style={{
              color: dark.source,
              background: light.source,
              borderRadius: theme.shape.surface,
              boxShadow:
                '0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04), 0 16px 40px -24px rgba(0, 0, 0, 0.24)',
              fontFamily: theme.typography.body,
            }}
          >
            <header
              className={css({
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'start',
                justifyContent: 'space-between',
                gap: '4',
              })}
            >
              <div className={css({ display: 'grid', gap: '1', maxWidth: '2xl' })}>
                <h2
                  className={css({
                    margin: '0',
                    fontSize: { base: '2xl', md: '3xl' },
                    lineHeight: 'tight',
                    textWrap: 'balance',
                  })}
                  style={{
                    fontFamily: theme.typography.heading,
                    letterSpacing: theme.typography.headingTracking,
                    margin: 0,
                  }}
                >
                  {theme.name}
                </h2>
                <p
                  className={css({ margin: '0', textWrap: 'pretty' })}
                  style={{ margin: 0 }}
                >
                  {theme.description}
                </p>
              </div>

              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '10',
                  paddingInline: '4',
                  fontWeight: 'semibold',
                  fontSize: 'sm',
                })}
                style={{
                  color: onPrimary.source,
                  background: primary.source,
                  borderRadius: theme.shape.control,
                  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
                }}
              >
                {theme.motion.character}
              </span>
            </header>

            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
                gap: '4',
              })}
            >
              {[primary, secondary].map((color) => (
                <section
                  key={color.name}
                  className={css({ display: 'grid', gap: '3' })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '3',
                    })}
                  >
                    <strong>{color.name}</strong>
                    <code
                      className={css({
                        fontSize: 'xs',
                        fontVariantNumeric: 'tabular-nums',
                      })}
                    >
                      {color.source}
                    </code>
                  </div>
                  <div
                    className={css({
                      display: 'grid',
                      gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
                      gap: '1',
                    })}
                  >
                    {rampLabels.map((shade) => (
                      <div
                        key={shade}
                        title={`${color.name} ${shade}: ${color.scale[shade]}`}
                        className={css({
                          aspectRatio: '1',
                          minWidth: '0',
                          outline: '1px solid rgba(0, 0, 0, 0.1)',
                          outlineOffset: '-1px',
                        })}
                        style={{
                          background: color.scale[shade],
                          borderRadius: theme.shape.control,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className={css({
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '2xs',
                      fontVariantNumeric: 'tabular-nums',
                    })}
                  >
                    <span>50</span>
                    <span>500</span>
                    <span>950</span>
                  </div>
                </section>
              ))}
            </div>

            <dl
              className={css({
                display: 'grid',
                gridTemplateColumns: {
                  base: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(4, minmax(0, 1fr))',
                },
                gap: '4',
                margin: '0',
                paddingTop: '4',
              })}
              style={{ boxShadow: 'inset 0 1px rgba(0, 0, 0, 0.1)' }}
            >
              <div>
                <dt className={css({ fontSize: 'xs', opacity: '0.7' })}>
                  Typography
                </dt>
                <dd className={css({ margin: '0', fontWeight: 'semibold' })}>
                  {theme.name === 'Canopy'
                    ? 'Editorial serif'
                    : theme.name === 'Volt'
                      ? 'Mono-led'
                      : 'Expressive sans'}
                </dd>
              </div>
              <div>
                <dt className={css({ fontSize: 'xs', opacity: '0.7' })}>
                  Control radius
                </dt>
                <dd
                  className={css({
                    margin: '0',
                    fontWeight: 'semibold',
                    fontVariantNumeric: 'tabular-nums',
                  })}
                >
                  {theme.shape.control}
                </dd>
              </div>
              <div>
                <dt className={css({ fontSize: 'xs', opacity: '0.7' })}>
                  Control heights
                </dt>
                <dd
                  className={css({
                    margin: '0',
                    fontWeight: 'semibold',
                    fontVariantNumeric: 'tabular-nums',
                  })}
                >
                  {Object.values(theme.density.controlHeights).join(' / ')}
                </dd>
              </div>
              <div>
                <dt className={css({ fontSize: 'xs', opacity: '0.7' })}>
                  Motion
                </dt>
                <dd
                  className={css({
                    margin: '0',
                    fontWeight: 'semibold',
                    fontVariantNumeric: 'tabular-nums',
                  })}
                >
                  {theme.motion.duration.normal}
                </dd>
              </div>
            </dl>
          </article>
        );
      })}
    </div>
  );
}
