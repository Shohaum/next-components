"use client"
// CSS
import styles from "@/components/dropdown/dropdownItem.module.css";
// utilities
import React from "react";
// types
import { DropdownItemProps } from "@/types/dropdown/dropdown";

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(({
    onClick = () => { },
    children,
    ...props
}, ref) => {


    return (
        <button
            {...props}
            ref={ref}
            className={`${styles.dropdownItem} ${props.className || ""}`}
            onClick={onClick}
            data-slot="dropdown-item"
        >
            {children}
        </button>
    )
});

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;