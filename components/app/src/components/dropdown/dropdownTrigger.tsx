"use client";
// CSS
import styles from "@/components/dropdown/dropdownTrigger.module.css";
// utilities
import React from "react";
// contexts
import { useDropdown } from "@/contexts/dropdown";
// types
import { DropDownTriggerProps } from "@/types/dropdown/dropdown";

const DropDownTrigger = React.forwardRef<HTMLDivElement, DropDownTriggerProps>(({ children, ...props }, ref) => {

    const { contentId, dropdownRef } = useDropdown();

    const toggleDropdown = () => {

        if (!dropdownRef?.current) return;

        dropdownRef.current.togglePopover();
    };

    return (
        <div {...props} ref={ref} className={`${styles.dropdownTrigger} ${props.className || ""}`} popoverTarget={contentId} onClick={toggleDropdown}>
            {children}
        </div>
    )
});

DropDownTrigger.displayName = "DropDownTrigger";

export default DropDownTrigger;