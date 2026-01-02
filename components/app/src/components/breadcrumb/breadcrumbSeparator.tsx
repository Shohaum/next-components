// utilitties
import React from "react";
// CSS
import styles from "./breadcrumbSeparator.module.css";
// types
import { BreadcrumbSeparatorProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
    ({
        ...props
    }, ref) => (
        <li
            {...props}
            ref={ref}
            role="presentation"
            aria-hidden="true"
            className={`${styles.breadcrumbSeparator} ${props.className || ""}`}
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path>
            </svg>
        </li>
    ));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export default BreadcrumbSeparator;
