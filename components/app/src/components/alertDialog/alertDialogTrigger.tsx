"use client"
// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogTrigger.module.css";
// custom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogTriggerProps } from "@/types/alertDialog/alertDialog";

const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(({ children, ...props }, ref) => {

    const { showAlertDialog } = useAlertDialog();

    return (
        <button {...props} tabIndex={0} ref={ref} data-slot="alert-trigger" onClick={() => showAlertDialog()} className={`${styles.alertDialogTrigger} ${props.className || ""}`}>
            {children}
        </button>
    );
});

AlertDialogTrigger.displayName = "AlertDialogTrigger";

export default AlertDialogTrigger;