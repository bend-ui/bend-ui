import _styled from '@emotion/styled';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'system-props';
import type { CSSObject as SystemPropsCSSObject } from 'system-props';

type VariantsObject = {
  variants?: {
    [param: string]: {
      [value: string]: SystemPropsCSSObject;
    };
  };
};

export type CSSObject = SystemPropsCSSObject | VariantsObject;

const config = {
  ...color,
  ...border,
  ...background,
  ...flexbox,
  ...grid,
  ...shadow,
  ...position,
  ...layout,
  ...space,
  ...typography,
};

export const css = (styleObject) => () => {
  const compiledStyles = Object.keys(styleObject).reduce((acc, key) => {
    const styles = styleObject[key];
    const systemConfig = config[key];

    if (!styles) {
      return acc;
    }

    if (typeof styles === 'object') {
      return Object.assign(acc, { [key]: css(styles)() });
    }

    if (
      !systemConfig ||
      typeof styles === 'number' ||
      !styles?.startsWith('$')
    ) {
      return Object.assign(acc, { [key]: styles });
    }

    if (systemConfig === true) {
      return acc;
    }

    if (systemConfig.properties) {
      return Object.assign(
        acc,
        Object.fromEntries(
          systemConfig.properties.map((property) => [
            property,
            `var(--${systemConfig.scale}-${styles.replace('$', '')})`,
          ])
        )
      );
    }

    return Object.assign(acc, {
      [systemConfig.property]: `var(--${systemConfig.scale}-${styles.replace(
        '$',
        ''
      )})`,
    });
  }, {});

  return compiledStyles;
};

export const styled = (component, styles: SystemPropsCSSObject = {}) => {
  const styleObject = css(styles);
  return _styled(component)(styleObject as any);
};
