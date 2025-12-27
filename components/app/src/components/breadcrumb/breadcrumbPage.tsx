import React from "react";
// CSS
import styles from "./breadcrumbPage.module.css";
// types
import { BreadcrumbPageProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
    ({ children, ...props }, ref) => (
        <span
            ref={ref}
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={styles.breadcrumbPage}
            {...props}
        >
            {children}
        </span>
    )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export default BreadcrumbPage;
