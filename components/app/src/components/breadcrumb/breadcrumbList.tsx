import React from "react";
// CSS
import styles from "./breadcrumbList.module.css";
// types
import { BreadcrumbListProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
    ({ children, ...props }, ref) => {

        return (<ol ref={ref} className={styles.breadcrumbList} {...props}>{children}</ol>)
    }
);
BreadcrumbList.displayName = "BreadcrumbList";

export default BreadcrumbList;
