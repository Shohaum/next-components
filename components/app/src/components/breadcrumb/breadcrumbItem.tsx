import React from "react";
// CSS
import styles from "./breadcrumbItem.module.css";
// types
import { BreadcrumbItemProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ children, ...props }, ref) => {
        return (
            <li {...props} ref={ref} className={`${styles.breadcrumbItem} ${props.className || ""}`}>
                {children}
            </li>
        )
    }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export default BreadcrumbItem;
