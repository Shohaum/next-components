// CSS
import styles from "@/components/dropdown/dropdownPortal.module.css"
// utilities
import React from "react";
// types
import { DropdownPortalProps } from "@/types/dropdown/dropdown";
const DropdownPortal = React.forwardRef<HTMLDivElement, DropdownPortalProps>(
    ({ children, ...props }, ref) => {

        return (
            <div {...props} ref={ref} className={`${styles.dropdownPortal} ${props.className || ""}`}>
                {children}
            </div>
        )
    });

DropdownPortal.displayName = "DropdownPortal";

export default DropdownPortal;