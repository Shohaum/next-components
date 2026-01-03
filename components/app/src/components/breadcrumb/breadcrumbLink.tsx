import React from "react";
import { Slot } from "@/components/breadcrumb/slots";
// CSS
import styles from "./breadcrumbLink.module.css";
// types
import { BreadcrumbLinkProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
    ({ asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : "a";

        return (
            <Comp
                {...props}
                ref={ref}
                className={`${styles.breadcrumbLink} ${props.className || ""}`}
            />
        );
    }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export default BreadcrumbLink;
