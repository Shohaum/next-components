# Aspect Ratio Component

## Overview
Displays content within a desired ratio. The Aspect Ratio component imposes a specific aspect ratio on its content, making it ideal for images, videos, maps, and embedding third-party content like iframes.

## Features
- **Headless**: No imposed specific look and feel (no borders or rounded corners by default).
- **Responsive**: The child content (e.g., `<img>`) automatically fills the container while maintaining the specified ratio.
- **Flexible**: Accepts any valid CSS aspect ratio (number).

## Accessibility
The component itself is a layout primitive (`<div>`) and does not require specific ARIA roles. However, you should ensure that the content inside remains accessible (e.g., providing `alt` text for images).

## API Reference

### Props

| Prop       | Type                              | Default | Description                                                                 |
|------------|-----------------------------------|---------|-----------------------------------------------------------------------------|
| `ratio`    | `number`                          | `1`     | The desired aspect ratio (width / height). For example, `16/9`.             |
| `children` | `ReactNode`                       | -       | The content to be displayed within the ratio.                               |
| `style`    | `CSSProperties`                   | -       | Custom styles to apply to the container.                                    |
| `...props` | `HTMLAttributes<HTMLDivElement>`  | -       | Any other valid HTML attributes for a `div` (e.g., `className`, `id`).      |

## Usage

```tsx
import AspectRatio from "@/components/aspectRatio/aspectRatio";
import Image from "next/image";

// 16:9 Ratio
<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
    alt="Photo by Drew Beamer"
  />
</AspectRatio>

// Square (1:1) Ratio
<AspectRatio ratio={1 / 1}>
    <img src="..." alt="..." />
</AspectRatio>

// With Custom Styling (to mimic "User Card" or similar)
<AspectRatio 
    ratio={16 / 9} 
    style={{ borderRadius: '0.5rem', overflow: 'hidden' }}
>
   <Image src="..." alt="..." fill />
</AspectRatio>
```
