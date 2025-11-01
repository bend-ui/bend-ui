# Tone Generator Usage Guide

The tone generator creates consistent semantic tokens for component theming with support for fill, text, stroke, and icon subcategories.

## Available Tones

- **neutral** - For neutral/grayscale UI elements
- **primary** - For primary brand colors
- **danger** - For error states and destructive actions (error preset applied to danger tokens)
- **warning** - For warning states and cautionary content
- **success** - For success states and positive feedback

## Token Structure

Each tone provides the following subcategories:

- **fill** - Background/surface colors
- **text** - Text colors
- **stroke** - Border colors (also referenced as "border" in some contexts)
- **icon** - Icon colors

### State Tokens

Each tone also includes state variations:

- **hover** - Hover state colors
- **pressed** - Active/pressed state colors
- **disabled** - Disabled state colors

## Usage in Components

### Using Panda CSS

```tsx
import { css } from '@particles/styled-system/css';

// Using tone tokens directly
const Button = () => (
  <button
    className={css({
      bg: 'primary.fill',
      color: 'primary.text',
      borderColor: 'primary.stroke',
      _hover: {
        bg: 'primary.hover',
      },
    })}
  >
    Primary Button
  </button>
);

// Error button (uses danger tokens)
const ErrorButton = () => (
  <button
    className={css({
      bg: 'danger.fill',
      color: 'danger.text',
      borderColor: 'danger.stroke',
    })}
  >
    Delete
  </button>
);

// Success alert with icon
const SuccessAlert = () => (
  <div
    className={css({
      bg: 'success.fill',
      color: 'success.text',
      borderColor: 'success.stroke',
      borderWidth: '1px',
      padding: '4',
      borderRadius: 'md',
    })}
  >
    <svg className={css({ color: 'success.icon' })}>
      {/* Icon content */}
    </svg>
    <p>Operation completed successfully!</p>
  </div>
);
```

### Using with Recipes

```tsx
import { defineRecipe } from '@pandacss/dev';

export const alertRecipe = defineRecipe({
  className: 'alert',
  base: {
    padding: '4',
    borderRadius: 'md',
    borderWidth: '1px',
    display: 'flex',
    gap: '2',
  },
  variants: {
    tone: {
      neutral: {
        bg: 'neutral.fill',
        color: 'neutral.text',
        borderColor: 'neutral.stroke',
      },
      primary: {
        bg: 'primary.fill',
        color: 'primary.text',
        borderColor: 'primary.stroke',
      },
      error: {
        bg: 'danger.fill',
        color: 'danger.text',
        borderColor: 'danger.stroke',
      },
      warning: {
        bg: 'warning.fill',
        color: 'warning.text',
        borderColor: 'warning.stroke',
      },
      success: {
        bg: 'success.fill',
        color: 'success.text',
        borderColor: 'success.stroke',
      },
    },
  },
  defaultVariants: {
    tone: 'neutral',
  },
});
```

## Customizing Tones

You can create custom tones using the `createTone` function:

```typescript
import { createTone } from '@particles/preset/utils/create-tone';

// Create a custom info tone
const infoTone = createTone({
  colorScale: 'blue',
  fillShade: { light: 50, dark: 950 },
  textShade: { light: 950, dark: 50 },
  strokeShade: { light: 300, dark: 700 },
  iconShade: { light: 600, dark: 400 },
  states: {
    hover: { light: 100, dark: 900 },
    pressed: { light: 200, dark: 800 },
    disabled: { light: 50, dark: 950 },
  },
});

// Use in your semantic tokens
export const customColors = defineSemanticTokens.colors({
  tone: {
    info: infoTone,
  },
});
```

## Token Reference

All tone tokens follow this structure:

```
{toneName}.{subcategory}
```

Where:
- `{toneName}` is one of: neutral, primary, danger, warning, success
- `{subcategory}` is one of: fill, text, stroke, icon, hover, pressed, disabled

Note: Error tones are available under the `danger` key to match the existing semantic token structure.

### Examples

- `primary.fill` - Primary fill/background color
- `danger.text` - Error text color
- `warning.stroke` - Warning border color
- `success.icon` - Success icon color
- `neutral.hover` - Neutral hover state color

## Light and Dark Mode Support

All tone tokens automatically adapt to light and dark color modes:

```tsx
// This will use light colors in light mode and dark colors in dark mode
<div className={css({ bg: 'primary.fill' })}>
  Content
</div>
```

The tone generator handles the light/dark mode switching automatically using Panda's `_light` and `_dark` conditions.

## Best Practices

1. **Consistency** - Use the same tone throughout a component for visual coherence
2. **Semantics** - Choose tones based on meaning (danger for destructive actions, success for confirmations, etc.)
3. **Accessibility** - The default shade values are chosen for good contrast, but always test with actual content
4. **States** - Use the state tokens (hover, pressed, disabled) for interactive elements to maintain consistent feedback
