# Badge Component

## Overview
The Badge component is a small visual label used to display status, categories, or quantitative values. It is often used to highlight specific items or states in a UI, such as "New", "Verified", "Success", or generic labels.

## Features
- **Multiple Variants**: Includes pre-defined styles for common states like success, danger, warning, and primary actions.
- **Verified Mode**: Special 'verified' variant that automatically includes a checkmark icon.
- **Customizable**: Accepts standard HTML attributes and custom styles.
- **Responsive**: Adapts to content size with max-content width.

## Anatomy

```tsx
<Badge variant="primary">
  Label
</Badge>
```

## API Reference

### Badge
The main component for rendering the badge.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to display inside the badge. |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'verified'` | `'default'` | Defines the visual style of the badge. |
| `className` | `string` | - | Optional additional class names. |

## Usage

### Basic Usage
The default badge style.

```tsx
import Badge from "@/components/badge/badge";

<Badge>Default Badge</Badge>
```

### Variants
Use various variants to denote different states.

```tsx
<div style={{ display: 'flex', gap: '10px' }}>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="danger">Failure</Badge>
  <Badge variant="warning">Warning</Badge>
</div>
```

### Verified Badge
The `verified` variant displays a checkmark icon alongside the content.

```tsx
<Badge variant="verified">
  Verified Account
</Badge>
```
