# Accordion Component

## Overview
A vertically stacked set of interactive headings that each reveal a section of content. The Accordion component allows users to toggle the visibility of content panels, making it useful for organizing large amounts of information in a limited space.

## Features
- **Headless**: No imposed styles, giving you full control over the look and feel.
- **Keyboard Accessible**: Fully navigable using keyboard controls (Tab to focus, Enter/Space to toggle).
- **Flexible**: Supports both single and multiple open items via the `isMultiple` prop.
- **Semantic**: Built using native `<details>` and `<summary>` elements for semantic correctness and better accessibility.
- **Animation Ready**: Optimizes height transitions using `useLayoutEffect` to handle dynamic content height (`--content-height`) and blur effects.

## Accessibility
The component implements the following ARIA attributes and roles for accessibility:

- **`role="presentation"`**: Applied to the main wrapper to remove semantic meaning from the container, focusing on the content.
- **`aria-expanded`**: Indicates the expansion state of the accordion item (true/false) on the `<summary>` element.
- **`aria-controls`**: links the trigger (`<summary>`) to its associated content panel using a unique ID (`{key}-content`).
- **`aria-labelledby`**: links the content panel to its trigger using a unique ID (`{key}-trigger`).

## Usage
```tsx
import Accordion from "@/components/accordion/accordion";
import AccordionItem from "@/components/accordion/accordionItem";
import AccordionItemTrigger from "@/components/accordion/accordionItemTrigger";
import AccordionItemContent from "@/components/accordion/accordionItemContent";

<Accordion isMultiple={true}>
  <AccordionItem id="item-1">
    <AccordionItemTrigger>Section 1</AccordionItemTrigger>
    <AccordionItemContent>Content for section 1...</AccordionItemContent>
  </AccordionItem>
  <AccordionItem id="item-2">
    <AccordionItemTrigger>Section 2</AccordionItemTrigger>
    <AccordionItemContent>Content for section 2...</AccordionItemContent>
  </AccordionItem>
</Accordion>
```