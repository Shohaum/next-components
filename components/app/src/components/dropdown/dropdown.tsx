"use client";
// CSS
import styles from "./dropdown.module.css";
// utilities
import React from "react";
// contexts
import { DropdownProvider } from "@/contexts/dropdown";
// types
import { DropdownProps } from "@/types/dropdown/dropdown";

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(({ children, ...props }, ref) => {

    return (

        <div {...props} ref={ref} className={`${styles.dropdown} ${props.className || ""}`}>
            <DropdownProvider>
                {children}
            </DropdownProvider>
        </div>

    )
});

Dropdown.displayName = "Dropdown";

export default Dropdown;