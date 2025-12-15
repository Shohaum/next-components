"use client";
// Contexts
import { DropdownSubProvider } from "@/contexts/dropdown";
type DropdownSubProps = {
    children: React.ReactNode;
}

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