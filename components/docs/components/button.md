# Button Component

## Overview
A fundamental interactive element that triggers an action or event. The Button component extends the native HTML button with consistent styling and behavior while maintaining full flexibility for standard attributes.

## Features
- **Native Support**: Extends standard HTML button attributes and events.
- **Flexible Styling**: Accepts external classes to easily override or extend styles.
- **Accessibility**: Built with semantic `<button>` element and clear focus states.
- **Forward Ref**: Supports React `ref` forwarding for direct DOM access.

## Anatomy

```tsx
<Button>
  Click me
</Button>
```

## API Reference

### Button
The core component for user interaction.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to display inside the button (e.g., text, icons). |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | The behavior type of the button. |
| `className` | `string` | - | Additional CSS classes to apply to the button. |
| `...props` | `HTMLButtonElement` | - | Any other standard HTML button attributes (onClick, disabled, etc.). |

## Usage

### Standard Button

```tsx
import Button from "@/components/button/button";

<Button onClick={() => alert("Clicked!")}>
  Click me
</Button>
```

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" name="username" />
  <Button type="submit">
    Submit
  </Button>
</form>
```

### Custom Styling
The component accepts a `className` prop which is merged with the default styles.

```tsx
<Button className="bg-blue-500 text-white hover:bg-blue-600">
  Custom Style
</Button>
```

## Accessibility
- Renders a native `<button>` element, ensuring inherent accessibility (keyboard focus, screen reader announcements).
- distinct `:focus-visible` styles are applied in CSS module for keyboard navigation users.
- Supports `aria-*` attributes via prop spreading.