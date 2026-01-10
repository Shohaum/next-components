"use client";
// CSS
import styles from "@/components/dropdown/dropdownSubTrigger.module.css";
// utilities
import React from "react";
// contexts
import { useDropdownSub } from "@/contexts/dropdown";
// types
import { DropdownSubTriggerProps } from "@/types/dropdown/dropdown";

const DropdownSubTrigger = React.forwardRef<HTMLButtonElement, DropdownSubTriggerProps>(({ children, ...props }, ref) => {

    const { contentId } = useDropdownSub();

    return (
        <button {...props} ref={ref} className={`${styles.dropdownSubTrigger} ${props.className || ""}`} popoverTarget={contentId}>
            {children}
        </button>
    )
});

DropdownSubTrigger.displayName = "DropdownSubTrigger";

export default DropdownSubTrigger;