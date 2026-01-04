// CSS
import styles from "@/components/dropdown/dropdownGroupSeparator.module.css";
// utilities
import React from "react";
// types
import { DropdownGroupSeparatorProps } from "@/types/dropdown/dropdown";

const DropdownGroupSeparator = React.forwardRef<HTMLDivElement, DropdownGroupSeparatorProps>(({ ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={`${styles.separator} ${props.className || ""}`} />
    )
});

DropdownGroupSeparator.displayName = "DropdownGroupSeparator";

export default DropdownGroupSeparator;