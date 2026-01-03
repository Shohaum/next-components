// utilities
import React from "react";
// CSS
import styles from "@/components/alert/alertTitle.module.css";
// types
import { AlertTitleProps } from "@/types/alert/alert";

const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(({ children, ...props }, ref) => {
    return <h4 {...props} ref={ref} className={`${styles.alertTitle} ${props.className || ""}`}>
        {children}
    </h4>;
});

AlertTitle.displayName = "AlertTitle";

export default AlertTitle;