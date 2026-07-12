# @bend-ui/base-ui

A comprehensive React component library built on top of [Base UI](https://base-ui.com/) and styled with [Panda CSS](https://panda-css.com/).

## Installation

```bash
npm install @bend-ui/base-ui
```

## Peer Dependencies

This package requires the following peer dependencies:

- `@pandacss/dev` (^1)
- `react` (^19)
- `react-dom` (^19)

## Components

This package provides the following components:

- **Accordion** - Collapsible content sections
- **AlertDialog** - Modal dialogs for important confirmations
- **Avatar** - User profile images
- **Checkbox** - Single and grouped checkboxes
- **Collapsible** - Show/hide content sections
- **ContextMenu** - Right-click context menus
- **Dialog** - Modal dialogs
- **Field** - Form field wrapper
- **Fieldset** - Form field grouping
- **Form** - Form container
- **Input** - Text input fields
- **Menu** - Dropdown menus
- **Menubar** - Horizontal menu bars
- **Meter** - Progress meters
- **NavigationMenu** - Navigation menus
- **NumberField** - Numeric input fields
- **Popover** - Floating content containers
- **PreviewCard** - Card components for previews
- **Progress** - Progress indicators
- **Radio** - Radio button groups
- **ScrollArea** - Custom scrollable areas
- **Select** - Dropdown select inputs
- **Separator** - Visual dividers
- **Slider** - Range sliders
- **Switch** - Toggle switches
- **Tabs** - Tabbed interfaces
- **Toast** - Notification toasts
- **Toggle** - Toggle buttons
- **ToggleGroup** - Grouped toggle buttons
- **Toolbar** - Toolbar containers
- **Tooltip** - Hover tooltips

## Usage

```tsx
import { Accordion, Dialog, Button } from '@bend-ui/base-ui';

function App() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content here</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Development

### Build

```bash
nx build @bend-ui/base-ui
```

### Test

```bash
nx test @bend-ui/base-ui
```

### Storybook

Run Storybook to view and interact with components:

```bash
nx storybook @bend-ui/base-ui
```

Build static Storybook:

```bash
nx build-storybook @bend-ui/base-ui
```

## Related Packages

- `@bend-ui/styled-system` - Styling system with Panda CSS
- `@bend-ui/preset` - Design system presets
- `@bend-ui/theme` - Theme configuration

## License

This package is part of the Bend UI design system.
