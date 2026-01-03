# Counter Component

## Overview
An interactive numeric input component that allows users to adjust a value within a specified range. It features increment/decrement controls, keyboard support, and smooth value transition animations.

## Features
- **Controlled Input**: Fully controlled via `value` and `onValueChange` props.
- **Range Constraints**: Enforces `min` and `max` boundaries automatically.
- **Step Control**: customizable increment/decrement step size.
- **Keyboard Support**: Supports `ArrowUp` and `ArrowDown` keys for rapid value adjustment.
- **Animation**: Smooth sliding animations for value changes.
- **Accessibility**: Implements `role="spinbutton"` with proper ARIA attributes for screen readers.

## Anatomy

```tsx
<Counter 
  value={value} 
  onValueChange={setValue} 
  min={0} 
  max={10} 
/>
```

## API Reference

### Counter
The primary component for numeric value selection.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | The current value of the counter. |
| `min` | `number` | `0` | The minimum allowed value. |
| `max` | `number` | `10` | The maximum allowed value. |
| `step` | `number` | `1` | The amount to increment or decrement by. |
| `onValueChange` | `(value: number) => void` | - | Callback fired when the value changes. |
| `className` | `string` | - | Additional CSS classes for the wrapper. |
| `...props` | `HTMLAttributes<HTMLDivElement>` | - | Standard HTML attributes passed to the wrapper div. |

## Usage

### Basic Usage

```tsx
import { useState } from "react";
import Counter from "@/components/counter/counter";

export default function Demo() {
  const [count, setCount] = useState(0);

  return (
    <Counter 
      value={count} 
      onValueChange={setCount} 
      min={0} 
      max={100} 
    />
  );
}
```

### Custom Step

```tsx
<Counter 
  value={value} 
  onValueChange={setValue} 
  step={5} // Increment by 5
  min={0} 
  max={50} 
/>
```

## Accessibility
- Uses `role="spinbutton"` pattern for semantic representation.
- Manages `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` automatically.
- Buttons have proper `aria-label`s for "increment value" and "decrement value".
- Supports standard keyboard navigation:
  - **ArrowUp**: Increments the value.
  - **ArrowDown**: Decrements the value.
- Includes a hidden native `<input>` for form submission compatibility and potential focus handling fallback.