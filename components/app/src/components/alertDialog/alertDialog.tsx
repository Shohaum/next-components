// utilities
import React from "react";
// context
import { AlertDialogProvider } from "@/contexts/alertDialog";
// types
import { AlertDialogProps } from "@/types/alertDialog/alertDialog";

const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} ref={ref}>
            <AlertDialogProvider>
                {children}
            </AlertDialogProvider>
        </div>
    );
});

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;