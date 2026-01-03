// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialog.module.css";
// context
import { AlertDialogProvider } from "@/contexts/alertDialog";
// types
import { AlertDialogProps } from "@/types/alertDialog/alertDialog";

const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={styles.alertDialog}>
            <AlertDialogProvider>
                {children}
            </AlertDialogProvider>
        </div>
    );
});

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;