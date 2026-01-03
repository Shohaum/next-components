// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogAction.module.css"
// types
import { AlertDialogActionProps } from "@/types/alertDialog/alertDialog";

const AlertDialogAction = React.forwardRef<HTMLButtonElement, AlertDialogActionProps>(({ onClick = () => { }, children, ...props }, ref) => {
    return (
        <button {...props} onClick={onClick} type="button" title="dialog button" name="dialog button" tabIndex={0} className={`${styles.alertDialogAction} ${props.className || ""}`} ref={ref}>
            {children}
        </button>
    );
});

AlertDialogAction.displayName = "AlertDialogAction";

export default AlertDialogAction;