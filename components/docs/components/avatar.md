# Avatar Component

## Overview
A visual representation of a user or entity, typically used to display profile pictures, initials, or icons. The Avatar component handles image loading states gracefully, providing fallback content when an image is unavailable or failing to load.

## Features
- **Loading States**: Automatically manages transition between loading and loaded/error states.
- **Fallback Support**: Displays custom fallback content (e.g., initials) if the image fails to load.
- **Tooltip Integration**: Built-in support for displaying names and designations on hover.
- **Collapsed Groups**: Supports stacking multiple avatars in a grouped layout.
- **Grayscale Filter**: Optional grayscale effect for images.
- **Accessibility**: Includes appropriate ARIA roles and labels for screen readers.

## Anatomy

```tsx
<Avatar>
  <AvatarImage />
  <AvatarFallback />
</Avatar>
```

## API Reference

### Avatar
The provider component that wraps the avatar sub-components.

| Prop          | Type             | Default | Description                                                                 |
|---------------|------------------|---------|-----------------------------------------------------------------------------|
| `width`       | `number`         | `0`     | The width of the avatar in pixels.                                          |
| `showTooltip` | `boolean`        | `false` | Whether to show a tooltip on hover.                                         |
| `name`        | `string`         | -       | The name to display in the tooltip and for `aria-label`.                    |
| `designation` | `string`         | -       | The designation or title to display in the tooltip.                         |
| `children`    | `ReactNode`      | -       | Usually `AvatarImage` and `AvatarFallback`.                                 |

### AvatarImage
The component that renders the user's image.

| Prop             | Type                                      | Default | Description                                                                 |
|------------------|-------------------------------------------|---------|-----------------------------------------------------------------------------|
| `src`            | `string`                                  | -       | The source URL of the image.                                                |
| `alt`            | `string`                                  | `""`    | Accessible description for the image.                                       |
| `grayScale`      | `boolean`                                 | `false` | Applies a grayscale filter to the image.                                    |
| `onStatusChange` | `(status: 'loaded' \| 'error') => void` | -       | Callback triggered when the loading status changes.                        |

### AvatarFallback
Displayed when the image is loading or fails to load.

| Prop       | Type        | Default | Description                                                                 |
|------------|-------------|---------|-----------------------------------------------------------------------------|
| `children` | `ReactNode` | -       | The content to display as a fallback (e.g., initials or an icon).           |

### AvatarCollapsed
A layout component for grouping multiple avatars.

| Prop       | Type        | Default | Description                                                                 |
|------------|-------------|---------|-----------------------------------------------------------------------------|
| `children` | `ReactNode` | -       | One or more `Avatar` components.                                            |

## Usage

### Simple Avatar with Fallback

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";

<Avatar width={40}>
  <AvatarImage src="https://github.com/shohaum.png" alt="@shohaum" />
  <AvatarFallback>SS</AvatarFallback>
</Avatar>
```

### Avatar with Tooltip

```tsx
<Avatar 
  showTooltip={true} 
  name="Vercel" 
  designation="SDE - Vercel" 
  width={50}
>
  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
  <AvatarFallback>VC</AvatarFallback>
</Avatar>
```

### Collapsed Avatar Group

```tsx
import { AvatarCollapsed } from "@/components/avatar";

<AvatarCollapsed>
  <Avatar width={40}>
    <AvatarImage src="https://github.com/shohaum.png" />
    <AvatarFallback>SS</AvatarFallback>
  </Avatar>
  <Avatar width={40}>
    <AvatarImage src="https://github.com/vercel.png" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
</AvatarCollapsed>
```

## Accessibility
- The `Avatar` component uses `role="img"` and an `aria-label` derived from the `name` prop (falling back to "avatar").
- `AvatarFallback` is marked with `role="presentation"` to avoid redundant announcements when the image fails.
- Tooltips are semantic and contain structured `h4` and `span` tags for better clarity.
# Avatar Component

## Overview
A visual representation of a user or entity, typically used to display profile pictures, initials, or icons. The Avatar component handles image loading states gracefully, providing fallback content when an image is unavailable or failing to load.

## Features
- **Loading States**: Automatically manages transition between loading and loaded/error states.
- **Fallback Support**: Displays custom fallback content (e.g., initials) if the image fails to load.
- **Tooltip Integration**: Built-in support for displaying names and designations on hover.
- **Collapsed Groups**: Supports stacking multiple avatars in a grouped layout.
- **Grayscale Filter**: Optional grayscale effect for images.
- **Accessibility**: Includes appropriate ARIA roles and labels for screen readers.

## Anatomy

```tsx
<Avatar>
  <AvatarImage />
  <AvatarFallback />
</Avatar>
```

## API Reference

### Avatar
The provider component that wraps the avatar sub-components.

| Prop          | Type             | Default | Description                                                                 |
|---------------|------------------|---------|-----------------------------------------------------------------------------|
| `width`       | `number`         | `0`     | The width of the avatar in pixels.                                          |
| `showTooltip` | `boolean`        | `false` | Whether to show a tooltip on hover.                                         |
| `name`        | `string`         | -       | The name to display in the tooltip and for `aria-label`.                    |
| `designation` | `string`         | -       | The designation or title to display in the tooltip.                         |
| `children`    | `ReactNode`      | -       | Usually `AvatarImage` and `AvatarFallback`.                                 |

### AvatarImage
The component that renders the user's image.

| Prop             | Type                                      | Default | Description                                                                 |
|------------------|-------------------------------------------|---------|-----------------------------------------------------------------------------|
| `src`            | `string`                                  | -       | The source URL of the image.                                                |
| `alt`            | `string`                                  | `""`    | Accessible description for the image.                                       |
| `grayScale`      | `boolean`                                 | `false` | Applies a grayscale filter to the image.                                    |
| `onStatusChange` | `(status: 'loaded' \| 'error') => void` | -       | Callback triggered when the loading status changes.                        |

### AvatarFallback
Displayed when the image is loading or fails to load.

| Prop       | Type        | Default | Description                                                                 |
|------------|-------------|---------|-----------------------------------------------------------------------------|
| `children` | `ReactNode` | -       | The content to display as a fallback (e.g., initials or an icon).           |

### AvatarCollapsed
A layout component for grouping multiple avatars.

| Prop       | Type        | Default | Description                                                                 |
|------------|-------------|---------|-----------------------------------------------------------------------------|
| `children` | `ReactNode` | -       | One or more `Avatar` components.                                            |

## Usage

### Simple Avatar with Fallback

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";

<Avatar width={40}>
  <AvatarImage src="https://github.com/shohaum.png" alt="@shohaum" />
  <AvatarFallback>SS</AvatarFallback>
</Avatar>
```

### Avatar with Tooltip

```tsx
<Avatar 
  showTooltip={true} 
  name="Vercel" 
  designation="SDE - Vercel" 
  width={50}
>
  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
  <AvatarFallback>VC</AvatarFallback>
</Avatar>
```

### Collapsed Avatar Group

```tsx
import { AvatarCollapsed } from "@/components/avatar";

<AvatarCollapsed>
  <Avatar width={40}>
    <AvatarImage src="https://github.com/shohaum.png" />
    <AvatarFallback>SS</AvatarFallback>
  </Avatar>
  <Avatar width={40}>
    <AvatarImage src="https://github.com/vercel.png" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
</AvatarCollapsed>
```

## Accessibility
- The `Avatar` component uses `role="img"` and an `aria-label` derived from the `name` prop (falling back to "avatar").
- `AvatarFallback` is marked with `role="presentation"` to avoid redundant announcements when the image fails.
- Tooltips are semantic and contain structured `h4` and `span` tags for better clarity.