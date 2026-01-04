# Dropdown

A flexible and composable dropdown menu component built using the native HTML Popover API.

## Overview

The `Dropdown` component provides a menu that allows users to select from a list of actions or options. It supports nested submenus, groups, separators, and shortcut indicators. It uses the `popover` attribute for native browser support and includes custom keyboard navigation.

## Features

-   **Native Popover API**: Uses the standard HTML `popover` attribute for lightweight and accessible overlays.
-   **Keyboard Navigation**: Custom `useKeyboardNavigation` hook provides Arrow Keys (Up/Down), Home, and End navigation within the menu.
-   **Composability**: Built with small, focused components (`Trigger`, `Content`, `Item`, `Group`, etc.) for maximum flexibility.
-   **Nested Menus**: Supports multi-level submenus via `DropdownSub`.
-   **Styling**: CSS Modules based styling for encapsulation.
-   **Accessibility**: Manages IDs and roles for screen readers.

## Usage

```tsx
import Dropdown from "@/components/dropdown/dropdown";
import DropdownTrigger from "@/components/dropdown/dropdownTrigger";
import DropdownContent from "@/components/dropdown/dropdownContent";
import DropdownItem from "@/components/dropdown/dropdownItem";
import DropdownGroup from "@/components/dropdown/dropdownGroup";
import DropdownLabel from "@/components/dropdown/dropdownLabel";
import DropdownGroupSeparator from "@/components/dropdown/dropdownGroupSeparator";

const MyDropdown = () => (
    <Dropdown>
        <DropdownTrigger>
            <button>Options</button>
        </DropdownTrigger>
        <DropdownContent>
            <DropdownLabel label="My Account" />
            <DropdownGroupSeparator />
            <DropdownGroup>
                <DropdownItem onClick={() => console.log('Profile')}>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
            </DropdownGroup>
        </DropdownContent>
    </Dropdown>
);
```

### With Submenu

```tsx
import DropdownSub from "@/components/dropdown/dropdownSub";
import DropdownSubTrigger from "@/components/dropdown/dropdownSubTrigger";
import DropdownSubContent from "@/components/dropdown/dropdownSubContent";

<DropdownContent>
    {/* ... other items */}
    <DropdownSub>
        <DropdownSubTrigger>More Options</DropdownSubTrigger>
        <DropdownSubContent>
            <DropdownItem>Sub Item 1</DropdownItem>
            <DropdownItem>Sub Item 2</DropdownItem>
        </DropdownSubContent>
    </DropdownSub>
</DropdownContent>
```

## API Reference

### Dropdown
The root component that provides context (`contentId`, `dropdownRef`).
- **Props**: `DropdownProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownTrigger
The element that toggles the visibility of the dropdown content. It automatically links to the content via `popoverTarget`.
- **Props**: `DropDownTriggerProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownContent
The container for the dropdown items. It uses `useKeyboardNavigation` to manage focus.
- **Props**: `DropdownContentProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode
    - `width`, `minWidth`, `maxWidth` (optional via style/props)

### DropdownItem
An interactive item within the dropdown. Renders as a `<button>`.
- **Props**: `DropdownItemProps` (extends `React.ComponentProps<"button">`)
    - `children`: ReactNode
    - `onClick`: `() => void`

### DropdownGroup
Wraps a collection of items.
- **Props**: `DropdownGroupProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownLabel
Displays a text label, typically for a group.
- **Props**: `DropdownLabelProps` (extends `React.HTMLAttributes<HTMLSpanElement>`)
    - `label`: `string`

### DropdownGroupSeparator
A visual separator line.
- **Props**: `DropdownGroupSeparatorProps` (extends `React.HTMLAttributes<HTMLDivElement>`)

### DropdownSub
Root component for a nested submenu. Provides its own context.
- **Props**: `DropdownSubProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownSubTrigger
Trigger element for the submenu.
- **Props**: `DropdownSubTriggerProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownSubContent
Container for submenu items.
- **Props**: `DropdownSubContentProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### DropdownItemShortcut
Helper to display keyboard shortcuts (e.g., "⌘C") inside an item.
- **Props**: `DropdownItemShortcutProps` (extends `React.HTMLAttributes<HTMLSpanElement>`)
    - `children`: ReactNode
