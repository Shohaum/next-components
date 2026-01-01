// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogCancel.module.css";
// custom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogCancelProps } from "@/types/alertDialog/alertDialog";

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, AlertDialogCancelProps>(({ children, ...props }, ref) => {

    const { closeAlertDialog } = useAlertDialog();

    return (
        <button {...props} type="button" title="dialog button" name="dialog button" tabIndex={0} className={`${styles.alertDialogCancel} ${props.className || ""}`} onClick={closeAlertDialog} ref={ref}>
            {children}
        </button>
    );
});

AlertDialogCancel.displayName = "AlertDialogCancel";

export default AlertDialogCancel;