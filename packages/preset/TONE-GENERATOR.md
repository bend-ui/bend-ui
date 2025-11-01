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
  bg: 'primary.fill',
  color: 'primary.text',
  borderColor: 'primary.stroke',
  _hover: { bg: 'primary.hover' }
})} />

// Error alert (uses danger tokens)
<div className={css({
  bg: 'danger.fill',
  color: 'danger.text',
  borderColor: 'danger.stroke'
})} />

// Success notification with icon
<div className={css({
  bg: 'success.fill',
  color: 'success.text'
})}>
  <Icon className={css({ color: 'success.icon' })} />
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
        bg: 'neutral.fill',
        color: 'neutral.text',
        borderColor: 'neutral.stroke',
        _hover: { bg: 'neutral.hover' },
      },
      primary: {
        bg: 'primary.fill',
        color: 'primary.text',
        borderColor: 'primary.stroke',
        _hover: { bg: 'primary.hover' },
      },
      error: {
        bg: 'danger.fill',
        color: 'danger.text',
        borderColor: 'danger.stroke',
        _hover: { bg: 'danger.hover' },
      },
      // ... warning, success
    },
  },
});
```

## Token Structure

All tone tokens follow this pattern:

```
{toneName}.{category}
```

Where:
- `toneName` is: neutral | primary | danger | warning | success
- `category` is: fill | text | stroke | icon | hover | pressed | disabled

Note: Error tones are available under the `danger` key to match the existing semantic token structure.

### Complete Token Reference

```typescript
// Neutral tone
neutral.fill      // Background color
neutral.text      // Text color
neutral.stroke    // Border color
neutral.icon      // Icon color
neutral.hover     // Hover state
neutral.pressed   // Pressed state
neutral.disabled  // Disabled state

// Primary tone
primary.fill
primary.text
primary.stroke
primary.icon
primary.hover
primary.pressed
primary.disabled

// Danger/Error tone
danger.fill
danger.text
danger.stroke
danger.icon
danger.hover
danger.pressed
danger.disabled

// Warning tone
warning.fill
warning.text
warning.stroke
warning.icon
warning.hover
warning.pressed
warning.disabled

// Success tone
success.fill
success.text
success.stroke
success.icon
success.hover
success.pressed
success.disabled
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
    bg: `${tone}.fill`,
    color: `${tone}.text`,
    borderColor: `${tone}.stroke`,
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
    bg: `${tone}.fill`,
    color: `${tone}.text`,
    borderColor: `${tone}.stroke`,
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
    color: `${tone}.icon`,
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
