// utilities
import React from "react";
// CSS
import styles from "@/components/alert/alertDescription.module.css";
// types
import { AlertDescriptionProps } from "@/types/alert/alert";

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(({ children, ...props }, ref) => {
    return <div {...props} ref={ref} className={`${styles.alertDescription} ${props.className || ""}`}>
        {children}
    </div>;
});

AlertDescription.displayName = "AlertDescription";

export default AlertDescription;