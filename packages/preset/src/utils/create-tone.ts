/**
 * Tone Generator Utility for PandaCSS
 *
 * Creates consistent semantic tokens for tones with fill, text, stroke, and icon subcategories.
 * Each tone can have different color values for light and dark modes.
 */

export interface ToneConfig {
  /**
   * The base color scale to use (e.g., 'blue', 'red', 'green', 'neutral')
   */
  colorScale: string;

  /**
   * Color shades for the fill (background/surface) subcategory
   * @default { light: 100, dark: 900 }
   */
  fillShade?: { light: number; dark: number };

  /**
   * Color shades for the text subcategory
   * @default { light: 900, dark: 100 }
   */
  textShade?: { light: number; dark: number };

  /**
   * Color shades for the stroke (border) subcategory
   * @default { light: 400, dark: 600 }
   */
  strokeShade?: { light: number; dark: number };

  /**
   * Color shades for the icon subcategory
   * @default { light: 700, dark: 300 }
   */
  iconShade?: { light: number; dark: number };

  /**
   * Additional shade mappings for hover, pressed, and other states
   */
  states?: {
    hover?: { light: number; dark: number };
    pressed?: { light: number; dark: number };
    disabled?: { light: number; dark: number };
  };
}

export interface ToneTokens {
  fill: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  text: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  stroke: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  icon: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  hover?: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  pressed?: {
    value: {
      _light: string;
      _dark: string;
    };
  };
  disabled?: {
    value: {
      _light: string;
      _dark: string;
    };
  };
}

/**
 * Creates a complete set of tone tokens with fill, text, stroke, and icon subcategories
 *
 * @param config - The tone configuration
 * @returns An object containing semantic tokens for the tone
 *
 * @example
 * ```ts
 * const primaryTone = createTone({
 *   colorScale: 'blue',
 *   fillShade: { light: 100, dark: 900 },
 *   textShade: { light: 900, dark: 100 },
 *   strokeShade: { light: 400, dark: 600 },
 *   iconShade: { light: 700, dark: 300 }
 * });
 * ```
 */
export function createTone(config: ToneConfig): ToneTokens {
  const {
    colorScale,
    fillShade = { light: 100, dark: 900 },
    textShade = { light: 900, dark: 100 },
    strokeShade = { light: 400, dark: 600 },
    iconShade = { light: 700, dark: 300 },
    states = {},
  } = config;

  const tokens: ToneTokens = {
    fill: {
      value: {
        _light: `{colors.${colorScale}.${fillShade.light}}`,
        _dark: `{colors.${colorScale}.${fillShade.dark}}`,
      },
    },
    text: {
      value: {
        _light: `{colors.${colorScale}.${textShade.light}}`,
        _dark: `{colors.${colorScale}.${textShade.dark}}`,
      },
    },
    stroke: {
      value: {
        _light: `{colors.${colorScale}.${strokeShade.light}}`,
        _dark: `{colors.${colorScale}.${strokeShade.dark}}`,
      },
    },
    icon: {
      value: {
        _light: `{colors.${colorScale}.${iconShade.light}}`,
        _dark: `{colors.${colorScale}.${iconShade.dark}}`,
      },
    },
  };

  // Add state tokens if provided
  if (states.hover) {
    tokens.hover = {
      value: {
        _light: `{colors.${colorScale}.${states.hover.light}}`,
        _dark: `{colors.${colorScale}.${states.hover.dark}}`,
      },
    };
  }

  if (states.pressed) {
    tokens.pressed = {
      value: {
        _light: `{colors.${colorScale}.${states.pressed.light}}`,
        _dark: `{colors.${colorScale}.${states.pressed.dark}}`,
      },
    };
  }

  if (states.disabled) {
    tokens.disabled = {
      value: {
        _light: `{colors.${colorScale}.${states.disabled.light}}`,
        _dark: `{colors.${colorScale}.${states.disabled.dark}}`,
      },
    };
  }

  return tokens;
}

/**
 * Predefined tone configurations for common use cases
 */
export const tonePresets = {
  neutral: {
    colorScale: 'neutral',
    fillShade: { light: 100, dark: 900 },
    textShade: { light: 900, dark: 100 },
    strokeShade: { light: 300, dark: 700 },
    iconShade: { light: 700, dark: 300 },
    states: {
      hover: { light: 200, dark: 800 },
      pressed: { light: 300, dark: 700 },
      disabled: { light: 100, dark: 900 },
    },
  } as ToneConfig,

  primary: {
    colorScale: 'primary',
    fillShade: { light: 100, dark: 900 },
    textShade: { light: 900, dark: 100 },
    strokeShade: { light: 400, dark: 600 },
    iconShade: { light: 700, dark: 300 },
    states: {
      hover: { light: 600, dark: 700 },
      pressed: { light: 700, dark: 800 },
      disabled: { light: 100, dark: 900 },
    },
  } as ToneConfig,

  error: {
    colorScale: 'red',
    fillShade: { light: 100, dark: 900 },
    textShade: { light: 900, dark: 100 },
    strokeShade: { light: 400, dark: 600 },
    iconShade: { light: 700, dark: 300 },
    states: {
      hover: { light: 500, dark: 700 },
      pressed: { light: 600, dark: 800 },
      disabled: { light: 100, dark: 900 },
    },
  } as ToneConfig,

  warning: {
    colorScale: 'yellow',
    fillShade: { light: 100, dark: 900 },
    textShade: { light: 900, dark: 100 },
    strokeShade: { light: 400, dark: 600 },
    iconShade: { light: 700, dark: 300 },
    states: {
      hover: { light: 500, dark: 700 },
      pressed: { light: 600, dark: 800 },
      disabled: { light: 100, dark: 900 },
    },
  } as ToneConfig,

  success: {
    colorScale: 'green',
    fillShade: { light: 100, dark: 900 },
    textShade: { light: 900, dark: 100 },
    strokeShade: { light: 400, dark: 600 },
    iconShade: { light: 700, dark: 300 },
    states: {
      hover: { light: 500, dark: 700 },
      pressed: { light: 600, dark: 800 },
      disabled: { light: 100, dark: 900 },
    },
  } as ToneConfig,
} as const;

/**
 * Helper function to generate all standard tones at once
 *
 * @returns An object with all tone tokens
 *
 * @example
 * ```ts
 * const tones = generateAllTones();
 * // Returns: { neutral: {...}, primary: {...}, error: {...}, warning: {...}, success: {...} }
 * ```
 */
export function generateAllTones() {
  return {
    neutral: createTone(tonePresets.neutral),
    primary: createTone(tonePresets.primary),
    error: createTone(tonePresets.error),
    warning: createTone(tonePresets.warning),
    success: createTone(tonePresets.success),
  };
}
