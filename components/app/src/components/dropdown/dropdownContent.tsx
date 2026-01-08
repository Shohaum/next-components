"use client"
// CSS
import styles from "@/components/dropdown/dropdownContent.module.css";
// utilities
import React from "react";
// contexts
import { useDropdown } from "@/contexts/dropdown";
// custom hooks
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
// types
import { DropdownContentProps } from "@/types/dropdown/dropdown";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>(({ children, ...props }, ref) => {
    const { contentId, dropdownRef } = useDropdown();

    useKeyboardNavigation(dropdownRef);

    const mergedRef = React.useMemo(
        () => mergeRefs<HTMLDivElement>(ref, dropdownRef),
        [ref, dropdownRef]
    );

    return (
        <div {...props} ref={mergedRef} data-slot="dropdown" id={contentId} popover="auto" className={`${styles.dropdownContent} ${props.className || ""}`}>
            {children}
        </div>
    )
});

DropdownContent.displayName = "DropdownContent";

export default DropdownContent;