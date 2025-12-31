# Alert Component

## Overview
Displays a callout for user attention. The Alert component is used to communicate key information, such as success messages, warnings, or errors, in a prominent way. It is designed to be accessible and easily distinguishable through semantic variations.

## Features
- **Variants**: Supports four distinct types to communicate different states: `normal` (default), `success`, `warn`, and `failure`.
- **Accessibility Integration**: Automatically maps types to appropriate ARIA roles and live region attributes for screen readers.
- **Headless & Styled**: Provides a semantic structure while handling dynamic styling through CSS variables (`--alert-color`).
- **Composable**: Built with sub-components (`AlertTitle`, `AlertDescription`) for flexible content arrangement.

## Accessibility
The component automatically handles accessibility based on the `type` prop:

| Type      | Role     | Aria Live   | Usage                                      |
|-----------|----------|-------------|--------------------------------------------|
| `normal`  | `status` | `polite`    | General information.                       |
| `success` | `status` | `polite`    | Successful completion of an action.        |
| `warn`    | `status` | `polite`    | Non-critical issues or precautions.        |
| `failure` | `alert`  | `assertive` | Critical errors demanding immediate attention.|

- **`aria-atomic="true"`**: Ensures that valid updates to the live region are announced as a whole, rather than just the changes.

## API Reference

### AlertItem
The core component that wraps the content and handles the variant logic.

| Prop       | Type                                      | Default  | Description                                                                 |
|------------|-------------------------------------------|----------|-----------------------------------------------------------------------------|
| `type`     | `'normal' \| 'success' \| 'warn' \| 'failure'` | `'normal'` | Determines the visual style and accessibility roles of the alert.           |
| `children` | `ReactNode`                               | -        | The content of the alert, usually `AlertTitle` and `AlertDescription`.      |
| `style`    | `CSSProperties`                           | -        | Custom styles. The defined variant sets `--alert-color`.                    |

## Usage

```tsx
import Alert from "@/components/alert/alert";
import AlertItem from "@/components/alert/alertItem";
import AlertTitle from "@/components/alert/alertTitle";
import AlertDescription from "@/components/alert/alertDescription";

// Error Alert
<Alert>
  <AlertItem type="failure">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </AlertItem>
</Alert>

// Success Alert
<Alert>
  <AlertItem type="success">
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>
      Profile details updated successfully.
    </AlertDescription>
  </AlertItem>
</Alert>

// Warning Alert
<Alert>
  <AlertItem type="warn">
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>
      This action cannot be undone.
    </AlertDescription>
  </AlertItem>
</Alert>
```
