"use client";
// Contexts
import { DropdownSubProvider } from "@/contexts/dropdown";
// types
import { DropdownSubProps } from "@/types/dropdown/dropdown";

const DropdownSub = ({ children }: DropdownSubProps) => {

    return (
        <div>
            <DropdownSubProvider>
                {children}
            </DropdownSubProvider>
        </div>
    )
};

export default DropdownSub;