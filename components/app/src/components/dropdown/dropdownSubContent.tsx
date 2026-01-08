"use client"
// CSS
import styles from "@/components/dropdown/dropdownSubContent.module.css";
// utilities
import React from "react";
// contexts
import { useDropdownSub } from "@/contexts/dropdown";
// custom hooks
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
// types
import { DropdownSubContentProps } from "@/types/dropdown/dropdown";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const DropdownSubContent = React.forwardRef<HTMLDivElement, DropdownSubContentProps>(({ children, ...props }, ref) => {

    const { contentId, dropdownSubRef } = useDropdownSub();

    useKeyboardNavigation(dropdownSubRef);

    const mergedRef = React.useMemo(
        () => mergeRefs<HTMLDivElement>(ref, dropdownSubRef),
        [ref, dropdownSubRef]
    );

    return (
        <div {...props} ref={mergedRef} data-slot="dropdown-sub" id={contentId} popover="auto" className={`${styles.dropdownSubContent} ${props.className || ""}`}>
            {children}
        </div>
    )
});

DropdownSubContent.displayName = "DropdownSubContent";

export default DropdownSubContent;