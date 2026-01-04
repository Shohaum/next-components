"use client";
// CSS
import styles from "@/components/dropdown/dropdownSubTrigger.module.css";
// utilities
import React from "react";
// contexts
import { useDropdownSub } from "@/contexts/dropdown";
// types
import { DropdownSubTriggerProps } from "@/types/dropdown/dropdown";

const DropdownSubTrigger = React.forwardRef<HTMLDivElement, DropdownSubTriggerProps>(({ children, ...props }, ref) => {

    const { contentId, dropdownSubRef } = useDropdownSub();

    const toggleDropdownSub = () => {

        if (!dropdownSubRef?.current) return;

        dropdownSubRef.current.togglePopover();
    };

    return (
        <div {...props} ref={ref} className={`${styles.dropdownSubTrigger} ${props.className || ""}`} popoverTarget={contentId} onClick={toggleDropdownSub}>
            {children}
        </div>
    )
});

DropdownSubTrigger.displayName = "DropdownSubTrigger";

export default DropdownSubTrigger;