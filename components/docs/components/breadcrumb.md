# Breadcrumb Component

## Overview
Breadcrumbs display a hierarchy of links to the current page. They indicate the current page's location within a navigational hierarchy and allow users to navigate back to parent pages.

## Features
- **Semantic Structure**: Uses standard `<nav>`, `<ol>`, and `<li>` elements for proper accessibility.
- **Composable**: Built from small, focused sub-components for maximum flexibility.
- **Accessible**: Automatic handling of `aria-current`, `aria-label`, and other accessibility attributes.
- **Customizable**: Easy to style and extend. supports custom separators and "asChild" pattern for links.

## Anatomy

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API Reference

### Breadcrumb
The root container for the breadcrumb navigation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Contains the `BreadcrumbList`. |
| ... | `ComponentProps<"nav">` | - | Standard `nav` attributes. |

### BreadcrumbList
The list container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Contains `BreadcrumbItem` and `BreadcrumbSeparator` elements. |
| ... | `ComponentProps<"ol">` | - | Standard `ol` attributes. |

### BreadcrumbItem
A single item in the breadcrumb trail.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content of the item (usually `BreadcrumbLink` or `BreadcrumbPage`). |
| ... | `ComponentProps<"li">` | - | Standard `li` attributes. |

### BreadcrumbLink
A navigation link.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Whether to merge props onto a child element (e.g. Next.js `Link`). |
| `href` | `string` | - | destination URL. |
| ... | `ComponentProps<"a">` | - | Standard `anchor` attributes. |

### BreadcrumbPage
Represents the current page in the hierarchy.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The page title. |
| ... | `ComponentProps<"span">` | - | Standard `span` attributes. |

### BreadcrumbSeparator
Visual separator between items.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `<ChevronRight />` | Optional custom separator icon. |
| ... | `ComponentProps<"li">` | - | Standard `li` attributes. |

### BreadcrumbEllipsis
Visual indicator for collapsed items.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | `ComponentProps<"span">` | - | Standard `span` attributes. |

## Usage

### Basic Usage

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

### With Next.js Link
Use the `asChild` prop to compose with Next.js `Link` component.

```tsx
import Link from "next/link"
import { BreadcrumbLink } from "@/components/breadcrumb"

<BreadcrumbLink asChild>
  <Link href="/about">About</Link>
</BreadcrumbLink>
```

### Collapsed with Ellipsis
Use `BreadcrumbEllipsis` to indicate hidden items (e.g. in a responsive view or long path).

```tsx
import { BreadcrumbEllipsis } from "@/components/breadcrumb"

<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>
```

## Accessibility
- **Structure**: The component uses a strict `nav` > `ol` > `li` structure which is best practice for screen readers.
- **Labels**: The `nav` element has a default `aria-label="breadcrumb"`.
- **Current Page**: `BreadcrumbPage` automatically applies `aria-current="page"`.
- **Separators**: `BreadcrumbSeparator` is hidden from screen readers (`aria-hidden="true"`) to prevent noise.
