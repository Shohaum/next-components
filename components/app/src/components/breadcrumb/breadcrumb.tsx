import React from "react";
// CSS
import styles from "@/components/breadcrumb/breadcrumb.module.css";
// types
import { BreadcrumbProps } from "@/types/breadcrumb/breadcrumb";

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(({ children, ...props }, ref) => {
    return (
        <nav {...props} ref={ref} role="navigation" aria-label="breadcrumb" className={styles.breadcrumb}>
            {children}
        </nav>
    );
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
