"use client";
// CSS
import styles from "@/components/dropdown/dropdownTrigger.module.css";
// utilities
import React from "react";
// contexts
import { useDropdown } from "@/contexts/dropdown";
// types
import { DropDownTriggerProps } from "@/types/dropdown/dropdown";
// slots
import { Slot } from "@/slots/slot";

const DropDownTrigger = React.forwardRef<HTMLButtonElement, DropDownTriggerProps>(({ asChild, ...props }, ref) => {

    const Comp = asChild ? Slot : "button";

    const { contentId } = useDropdown();

    return (
        <Comp {...props} ref={ref} className={`${styles.dropdownTrigger} ${props.className || ""}`} popoverTarget={contentId}>
        </Comp>
    )
});

DropDownTrigger.displayName = "DropDownTrigger";

export default DropDownTrigger;