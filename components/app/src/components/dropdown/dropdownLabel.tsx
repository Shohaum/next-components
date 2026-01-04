// CSS
import styles from "@/components/dropdown/dropdownLabel.module.css";
// utilities
import React from "react";
// types
import { DropdownLabelProps } from "@/types/dropdown/dropdown";

const DropdownLabel = React.forwardRef<HTMLSpanElement, DropdownLabelProps>(
    ({ label, ...props }, ref) => {
        return (
            <span {...props} ref={ref} className={`${styles.dropdownLabel} ${props.className || ""}`}>
                {label}
            </span>
        )
    });

DropdownLabel.displayName = "DropdownLabel";

export default DropdownLabel;