# Dropdown

A flexible and composable dropdown menu component built using the native HTML Popover API.

## Overview

The `Dropdown` component provides a menu that allows users to select from a list of actions or options. It supports nested submenus, groups, separators, and shortcut indicators. It is built using the `popover` attribute for native browser support and accessibility.

## Features

-   **Native Popover API**: Uses the standard HTML `popover` attribute for lightweight and accessible overlays.
-   **Composability**: Built with small, focused components (`Trigger`, `Content`, `Item`, `Group`, etc.) for maximum flexibility.
-   **Nested Menus**: Supports multi-level submenus via `DropdownSub`.
-   **Styling**: CSS Modules based styling for encapsulation.
-   **Keyboard Navigation**: Standard button-based items for navigation.

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

// Inside DropdownContent
<DropdownSub>
    <DropdownSubTrigger>More Options</DropdownSubTrigger>
    <DropdownSubContent>
        <DropdownItem>Sub Item 1</DropdownItem>
        <DropdownItem>Sub Item 2</DropdownItem>
    </DropdownSubContent>
</DropdownSub>
```

## API Reference

### Dropdown
The root component that provides context for the dropdown menu.
- **Props**: `DropdownProps`
    - `children`: ReactNode (Expects `DropdownTrigger` and `DropdownContent`)

### DropdownTrigger
The element that toggles the visibility of the dropdown content.
- **Props**: `DropDownTriggerProps`
    - `children`: ReactNode

### DropdownContent
The container for the dropdown items.
- **Props**: `DropdownContentProps`
    - `width`, `minWidth`, `maxWidth`: CSS values for sizing.
    - `children`: ReactNode (`DropdownItem`, `DropdownGroup`, `DropdownLabel`, etc.)

### DropdownItem
An interactive item within the dropdown. Renders as a `<button>`.
- **Props**: `DropdownItemProps`
    - `onClick`: `() => void`
    - `disabled`: `boolean`
    - `title`, `id`, `name`, `type`, `role`: Standard HTML attributes.
    - `dataValue`: Custom data attribute.

### DropdownGroup
Wraps a collection of items.
- **Props**: `DropdownGroupProps`
    - `children`: ReactNode

### DropdownLabel
Displays a text label, typically for a group.
- **Props**: `DropdownLabelProps`
    - `label`: `string`

### DropdownGroupSeparator
A visual separator line between items or groups.
- **Props**: `DropdownGroupSeparatorProps`

### DropdownSub
Root component for a nested submenu.
- **Props**: `DropdownSubProps`
    - `children`: ReactNode (Expects `DropdownSubTrigger` and `DropdownSubContent`)

### DropdownSubTrigger
Trigger element for the submenu.
- **Props**: `DropdownSubTriggerProps`
    - `children`: ReactNode

### DropdownSubContent
Container for submenu items.
- **Props**: `DropdownSubContentProps`
    - `children`: ReactNode
