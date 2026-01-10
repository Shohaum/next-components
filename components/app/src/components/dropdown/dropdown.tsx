"use client";
// contexts
import { DropdownProvider } from "@/contexts/dropdown";
// types
import { DropdownProps } from "@/types/dropdown/dropdown";

const Dropdown = ({ children }: DropdownProps) => {

    return (
        <DropdownProvider>
            {children}
        </DropdownProvider>
    )
};

Dropdown.displayName = "Dropdown";

export default Dropdown;