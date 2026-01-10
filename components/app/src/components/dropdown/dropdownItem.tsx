"use client"
// CSS
import styles from "@/components/dropdown/dropdownItem.module.css";
// utilities
import React from "react";
// types
import { DropdownItemProps } from "@/types/dropdown/dropdown";
// slots
import { Slot } from "@/slots/slot";

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(({
    onClick = () => { },
    asChild,
    ...props
}, ref) => {

    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            {...props}
            ref={ref}
            role="menuitem"
            className={`${styles.dropdownItem} ${props.className || ""}`}
            onClick={onClick}
            data-slot="dropdown-item"
        />
    )
});

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;