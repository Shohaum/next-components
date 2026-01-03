# Docking Station

A sophisticated, macOS-inspired navigation component featuring a floating "magnet" background that smoothly snaps to the active item or the item being hovered. It uses a context-based architecture to manage state across its sub-components.

## Features

-   **Smooth Magnetic Animation**: The background visual ("magnet") fluidly transitions between items using CSS transitions and coordinate calculations.
-   **Active State Tracking**: Automatically snaps to the current active route based on the URL pathname.
-   **Context-Driven**: Uses React Context to share state (magnet position, dimensions, opacity) efficiently between the list, items, and the magnet itself.
-   **Responsive Design**: Hover effects are conditionally applied only on larger screens (>= 768px) to preserve touch usability.
-   **Snap-Back Behavior**: When the mouse leaves the dock area, the magnet snaps back to the currently active route item.
-   **Scoped Styling**: Uses CSS Modules for conflict-free animations and layout.

## Anatomy

The Docking Station is composed of four main parts:

1.  **`LinkDocker`**: The root container that wraps the component and provides the `DockingStationProvider` context.
2.  **`DockList`**: The `ul` wrapper that manages the "snap-back" behavior on mouse leave and syncs the magnet to the active route on mount.
3.  **`DockItem`**: The `li` wrapper for individual navigation links. It calculates its own position on hover and updates the magnet's coordinates.
4.  **`Magnet`**: The visual floating background element that consumes the calculated styles (transform, width, opacity) from the context.

## API Reference

### LinkDocker

The top-level wrapper component.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactElement<DockListProps>` | - | Expects a `DockList` component as its child. |
| ... | `ComponentProps<"div">` | - | Standard `div` attributes. |

### DockList

The container for dock items.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | - | Contains `DockItem` components and the `Magnet`. |
| ... | `ComponentProps<"ul">` | - | Standard `ul` attributes. |

### DockItem

A list item representing a single navigation entry.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `slug` | `string` | - | **Required**. A unique identifier (e.g., `dashboard`). It MUST match the last segment of the URL pathname for the active state magnet to work correctly. |
| `children` | `ReactNode` | - | The content of the item, usually a `Link` or button. |
| ... | `ComponentProps<"li">` | - | Standard `li` attributes. |

### Magnet

The visual background element.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| - | - | - | Consumes `magnetStyles` from context. No public props. |
| ... | `ComponentProps<"span">` | - | Standard `span` attributes. |

## Usage

```tsx
import LinkDocker from "@/components/dockingStation/linkDocker";
import DockList from "@/components/dockingStation/dockList";
import DockItem from "@/components/dockingStation/dockItem";
import Magnet from "@/components/dockingStation/magnet";
import Link from "next/link";

export default function Navigate() {
  return (
    <LinkDocker>
      <DockList>
        <Magnet />
        <DockItem slug="home">
          <Link href="/">Home</Link>
        </DockItem>
        <DockItem slug="about">
          <Link href="/about">About</Link>
        </DockItem>
        <DockItem slug="contact">
          <Link href="/contact">Contact</Link>
        </DockItem>
      </DockList>
    </LinkDocker>
  );
}
```

## Accessibility

-   **Semantic Markup**: Uses standard `<ul>` and `<li>` elements, ensuring screen readers interpret it as a list of items.
-   **Focus Management**: While the visual magnet relies on mouse interactions, standard keyboard navigation via `Tab` should work for the interactive children (e.g., `<Link>`).
-   **Reduced Motion**: Consider strictly adhering to user's motion preferences by wrapping the transition styles in a `@media (prefers-reduced-motion: reduce)` block in `magnet.module.css`.

## Development Notes

-   **Path Matching**: The `DockList` matches the `slug` prop of a `DockItem` against `pathname.split("/").pop()`. Ensure your slugs match exactly with the last segment of your URLs.
-   **Z-Indexing**: The `Magnet` component has a `z-index: -9999` to ensure it stays behind the text/icons of the `DockItem`s.
-   **Dimensions**: The `DockItem` calculates width dynamically.
