# Tone Generator System

The Particles design system includes a comprehensive tone generator that creates semantic color tokens for consistent component theming.

## Overview

The tone generator creates a systematic approach to applying colors across components with support for:
- **fill** - Background/surface colors
- **text** - Text colors
- **stroke** - Border colors
- **icon** - Icon colors
- **State variants** - hover, pressed, disabled states

## Available Tones

### Neutral
For neutral/grayscale UI elements like default buttons, cards, and containers.

### Primary
For primary brand colors and call-to-action elements.

### Error
For error states, destructive actions, and critical alerts.

### Warning
For warning states and cautionary content.

### Success
For success states and positive feedback.

## Usage in PandaCSS

### Basic Usage

```tsx
import { css } from '@particles/styled-system/css';

// Primary button
<button className={css({
  bg: 'tone.primary.fill',
  color: 'tone.primary.text',
  borderColor: 'tone.primary.stroke',
  _hover: { bg: 'tone.primary.hover' }
})} />

// Error alert
<div className={css({
  bg: 'tone.error.fill',
  color: 'tone.error.text',
  borderColor: 'tone.error.stroke'
})} />

// Success notification with icon
<div className={css({
  bg: 'tone.success.fill',
  color: 'tone.success.text'
})}>
  <Icon className={css({ color: 'tone.success.icon' })} />
  <p>Success message</p>
</div>
```

### Using with Recipes

```typescript
import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    padding: '2 4',
    borderRadius: 'md',
    borderWidth: '1px',
  },
  variants: {
    tone: {
      neutral: {
        bg: 'tone.neutral.fill',
        color: 'tone.neutral.text',
        borderColor: 'tone.neutral.stroke',
        _hover: { bg: 'tone.neutral.hover' },
      },
      primary: {
        bg: 'tone.primary.fill',
        color: 'tone.primary.text',
        borderColor: 'tone.primary.stroke',
        _hover: { bg: 'tone.primary.hover' },
      },
      error: {
        bg: 'tone.error.fill',
        color: 'tone.error.text',
        borderColor: 'tone.error.stroke',
        _hover: { bg: 'tone.error.hover' },
      },
      // ... warning, success
    },
  },
});
```

## Token Structure

All tone tokens follow this pattern:

```
tone.{toneName}.{category}
```

Where:
- `toneName` is: neutral | primary | error | warning | success
- `category` is: fill | text | stroke | icon | hover | pressed | disabled

### Complete Token Reference

```typescript
// Neutral tone
tone.neutral.fill      // Background color
tone.neutral.text      // Text color
tone.neutral.stroke    // Border color
tone.neutral.icon      // Icon color
tone.neutral.hover     // Hover state
tone.neutral.pressed   // Pressed state
tone.neutral.disabled  // Disabled state

// Primary tone
tone.primary.fill
tone.primary.text
tone.primary.stroke
tone.primary.icon
tone.primary.hover
tone.primary.pressed
tone.primary.disabled

// Error tone
tone.error.fill
tone.error.text
tone.error.stroke
tone.error.icon
tone.error.hover
tone.error.pressed
tone.error.disabled

// Warning tone
tone.warning.fill
tone.warning.text
tone.warning.stroke
tone.warning.icon
tone.warning.hover
tone.warning.pressed
tone.warning.disabled

// Success tone
tone.success.fill
tone.success.text
tone.success.stroke
tone.success.icon
tone.success.hover
tone.success.pressed
tone.success.disabled
```

## Light & Dark Mode

All tone tokens automatically adapt to light and dark modes using PandaCSS's `_light` and `_dark` conditions. No additional configuration needed.

## Creating Custom Tones

You can extend the tone system with custom tones:

```typescript
import { createTone } from '@particles/preset';

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
```

Then add it to your semantic tokens:

```typescript
import { defineSemanticTokens } from '@pandacss/dev';

export const customColors = defineSemanticTokens.colors({
  tone: {
    info: infoTone,
  },
});
```

## Implementation Details

The tone generator is located at:
- **Generator utility**: `packages/preset/src/utils/create-tone.ts`
- **Semantic tokens**: `packages/preset/src/semanticTokens/colors.ts`
- **Usage examples**: `packages/preset/src/utils/tone-usage-examples.md`

### How It Works

1. `createTone()` function generates semantic tokens for a specific tone
2. Each tone maps to color scale shades (e.g., blue.100, blue.900)
3. Light and dark modes use inverted shade ranges for proper contrast
4. State variants provide interactive feedback colors

### Default Shade Mappings

| Category | Light Mode | Dark Mode |
|----------|------------|-----------|
| fill     | 100        | 900       |
| text     | 900        | 100       |
| stroke   | 400        | 600       |
| icon     | 700        | 300       |
| hover    | Varies     | Varies    |
| pressed  | Varies     | Varies    |
| disabled | 100        | 900       |

## Best Practices

1. **Consistency** - Use the same tone throughout a component for visual coherence
2. **Semantics** - Choose tones based on meaning:
   - `error` for destructive actions (delete, remove)
   - `success` for confirmations (saved, completed)
   - `warning` for cautionary actions (proceed with caution)
   - `primary` for main call-to-action
   - `neutral` for secondary actions

3. **Accessibility** - Default shade values provide good contrast, but always test with real content

4. **States** - Use state tokens (hover, pressed, disabled) for interactive elements:
   ```tsx
   <button className={css({
     bg: 'tone.primary.fill',
     _hover: { bg: 'tone.primary.hover' },
     _active: { bg: 'tone.primary.pressed' },
     _disabled: { bg: 'tone.primary.disabled' },
   })} />
   ```

## Examples

### Alert Component

```tsx
type AlertTone = 'neutral' | 'primary' | 'error' | 'warning' | 'success';

interface AlertProps {
  tone?: AlertTone;
  children: React.ReactNode;
}

export const Alert = ({ tone = 'neutral', children }: AlertProps) => (
  <div className={css({
    bg: `tone.${tone}.fill`,
    color: `tone.${tone}.text`,
    borderColor: `tone.${tone}.stroke`,
    borderWidth: '1px',
    borderRadius: 'md',
    padding: '4',
  })}>
    {children}
  </div>
);
```

### Badge Component

```tsx
export const Badge = ({ tone = 'neutral', children }: BadgeProps) => (
  <span className={css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1',
    bg: `tone.${tone}.fill`,
    color: `tone.${tone}.text`,
    borderColor: `tone.${tone}.stroke`,
    borderWidth: '1px',
    borderRadius: 'full',
    px: '2',
    py: '1',
    fontSize: 'sm',
  })}>
    {children}
  </span>
);
```

### Icon with Tone

```tsx
export const StatusIcon = ({ tone, icon: Icon }: StatusIconProps) => (
  <Icon className={css({
    color: `tone.${tone}.icon`,
    width: '5',
    height: '5',
  })} />
);
```

## TypeScript Support

All tone utilities are fully typed:

```typescript
import type { ToneConfig, ToneTokens } from '@particles/preset';

// ToneConfig interface defines the structure
const config: ToneConfig = {
  colorScale: 'blue',
  fillShade: { light: 100, dark: 900 },
  // ... other options
};

// ToneTokens interface defines the output
const tokens: ToneTokens = createTone(config);
```

## Related Documentation

- [PandaCSS Semantic Tokens](https://panda-css.com/docs/concepts/tokens#semantic-tokens)
- [Color Scale Reference](/packages/preset/src/tokens/colors.ts)
- [Preset Configuration](/packages/preset/src/index.ts)
