// utilities
import React from "react";
// CSS
import styles from "@/components/alert/alert.module.css";
// types
import { AlertProps } from "@/types/alert/alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ children, ...props }, ref) => {
    return <div {...props} ref={ref} className={`${styles.alert} ${props.className || ""}`}>
        {children}
    </div>;
});

Alert.displayName = "Alert";

export default Alert;