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
            <svg style={{ marginInlineStart: "auto" }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6">
            </path>
            </svg>
        </button>
    )
});

DropdownSubTrigger.displayName = "DropdownSubTrigger";

export default DropdownSubTrigger;