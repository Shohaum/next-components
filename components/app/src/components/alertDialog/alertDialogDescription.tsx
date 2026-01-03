"use client"
// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogDescription.module.css";
// types
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogDescriptionProps } from "@/types/alertDialog/alertDialog";

const AlertDialogDescription = React.forwardRef<HTMLDivElement, AlertDialogDescriptionProps>(({ children, ...props }, ref) => {
    const { descriptionId } = useAlertDialog();
    return (
        <div {...props} id={descriptionId} className={`${styles.alertDialogDescription} ${props.className || ""}`} ref={ref}>
            {children}
        </div>
    );
});

AlertDialogDescription.displayName = "AlertDialogDescription";

export default AlertDialogDescription;