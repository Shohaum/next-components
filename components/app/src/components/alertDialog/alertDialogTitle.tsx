// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogTitle.module.css";
// types
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogTitleProps } from "@/types/alertDialog/alertDialog";

const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(({ children, ...props }, ref) => {
    const { labelId } = useAlertDialog();
    return (
        <h3 id={labelId} {...props} className={styles.alertDialogTitle} ref={ref}>
            {children}
        </h3>
    );
});

AlertDialogTitle.displayName = "AlertDialogTitle";

export default AlertDialogTitle;