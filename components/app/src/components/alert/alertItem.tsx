// utilities
import React from "react";
// CSS
import styles from "@/components/alert/alertItem.module.css";
// types
import { AlertItemProps } from "@/types/alert/alert";

const AlertItem = React.forwardRef<HTMLDivElement, AlertItemProps>(({ type = "normal", children, ...props }, ref) => {

    const colorMap = {
        success: "var(--green-900)",
        warn: "var(--amber-900)",
        failure: "var(--red-900)",
        normal: "var(--text-color)",
    };

    const roleMap = {
        success: "status",
        warn: "status",
        failure: "alert",
        normal: "status",
    };

    const ariaLiveMap: Record<string, "polite" | "assertive" | "off"> = {
        success: "polite",
        warn: "polite",
        failure: "assertive",
        normal: "polite",
    };

    return <div {...props} role={roleMap[type]} aria-live={ariaLiveMap[type]} aria-atomic="true" style={{
        "--alert-color": colorMap[type], ...props.style
    } as React.CSSProperties} className={styles.alertItem} ref={ref}>
        {children}
    </div>;
});

AlertItem.displayName = "AlertItem";

export default AlertItem;