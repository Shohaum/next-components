// CSS
import styles from "@/components/dropdown/dropdownItemShortcut.module.css";
// utilities
import React from "react";
// types
import { DropdownItemShortcutProps } from "@/types/dropdown/dropdown";
const DropdownItemShortcut = React.forwardRef<HTMLSpanElement, DropdownItemShortcutProps>((
    { children, ...props }, ref) => {
    return (
        <span {...props} ref={ref} className={`${styles.dropdownItemShortcut} ${props.className || ""}`}>
            {children}
        </span>
    )
});

DropdownItemShortcut.displayName = "DropdownItemShortcut";

export default DropdownItemShortcut;