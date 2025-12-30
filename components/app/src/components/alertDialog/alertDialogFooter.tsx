// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogFooter.module.css";
// types
import { AlertDialogFooterProps } from "@/types/alertDialog/alertDialog";

const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} className={styles.alertDialogFooter} ref={ref}>
            {children}
        </div>
    );
});

AlertDialogFooter.displayName = "AlertDialogFooter";

export default AlertDialogFooter;