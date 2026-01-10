"use client"
// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogTrigger.module.css";
// custom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogTriggerProps } from "@/types/alertDialog/alertDialog";
// slots
import { Slot } from "@/slots/slot";

const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(({ asChild, ...props }, ref) => {

    const Comp = asChild ? Slot : "button";
    const { showAlertDialog } = useAlertDialog();

    return (
        <Comp {...props} ref={ref} data-slot="alert-trigger" onClick={() => showAlertDialog()} className={`${styles.alertDialogTrigger} ${props.className || ""}`} role="button" />
    );
});

AlertDialogTrigger.displayName = "AlertDialogTrigger";

export default AlertDialogTrigger;