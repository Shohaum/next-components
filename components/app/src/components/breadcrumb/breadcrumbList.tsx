import React from "react";
// CSS
import styles from "./breadcrumbList.module.css";
// types
import { BreadcrumbListProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
    ({ children, ...props }, ref) => {

        return (<ol {...props} ref={ref} className={`${styles.breadcrumbList} ${props.className || ""}`}>{children}</ol>)
    }
);
BreadcrumbList.displayName = "BreadcrumbList";

export default BreadcrumbList;
