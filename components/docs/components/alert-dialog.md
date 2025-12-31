# AlertDialog Component

## Overview
A modal dialog that interrupts the user with important content and expects a response. It is used to alert the user about critical information or require confirmation before proceeding with a dangerous action.

## Features
- **Headless**: Completely unstyled by default, allowing for custom design implementation.
- **Keyboard Accessible**: Manages focus trapping and supports closing via the generic dialog behaviors.
- **Native Implementation**: Built using the native HTML `<dialog>` element for robust browser support and accessibility.
- **Context-Aware**: Uses `AlertDialogProvider` and `useAlertDialog` hook for managing state across sub-components.

## Accessibility
The component adheres to WAI-ARIA patterns for alert dialogs:

- **`role="alertdialog"`**: Identifies the dialog as an alert dialog type, informing assistive technologies that it requires immediate attention.
- **`aria-labelledby`**: Associations the dialog with its title element.
- **`aria-describedby`**: Associates the dialog with its description element.
- **`data-slot`**: Used for internal styling or logic hooks (e.g., `data-slot="alert-dialog"`).

## Usage
```tsx
import AlertDialog from "@/components/alertDialog/alertDialog";
import AlertDialogTrigger from "@/components/alertDialog/alertDialogTrigger";
import AlertDialogContent from "@/components/alertDialog/alertDialogContent";
import AlertDialogHeader from "@/components/alertDialog/alertDialogHeader";
import AlertDialogTitle from "@/components/alertDialog/alertDialogTitle";
import AlertDialogDescription from "@/components/alertDialog/alertDialogDescription";
import AlertDialogFooter from "@/components/alertDialog/alertDialogFooter";
import AlertDialogCancel from "@/components/alertDialog/alertDialogCancel";
import AlertDialogAction from "@/components/alertDialog/alertDialogAction";

<AlertDialog>
  <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```