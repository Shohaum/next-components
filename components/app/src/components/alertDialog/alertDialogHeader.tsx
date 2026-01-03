"use client"
// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogHeader.module.css";
// types
import { AlertDialogHeaderProps } from "@/types/alertDialog/alertDialog";

const AlertDialogHeader = React.forwardRef<HTMLDivElement, AlertDialogHeaderProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} className={`${styles.alertDialogHeader} ${props.className || ""}`} ref={ref}>
            {children}
        </div>
    );
});

AlertDialogHeader.displayName = "AlertDialogHeader";

export default AlertDialogHeader;