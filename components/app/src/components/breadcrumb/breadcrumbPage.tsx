import React from "react";
// types
import { BreadcrumbPageProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
    ({ children, ...props }, ref) => (
        <span
            {...props}
            ref={ref}
            aria-current="page"
            className={`${props.className || ""}`}
        >
            {children}
        </span>
    )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export default BreadcrumbPage;
