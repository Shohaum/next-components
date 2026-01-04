// utilities
import React from "react";
// types
import { DropdownGroupProps } from "@/types/dropdown/dropdown";
const DropdownGroup = React.forwardRef<HTMLDivElement, DropdownGroupProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} ref={ref}>
            {children}
        </div>
    )
});

DropdownGroup.displayName = "DropdownGroup";

export default DropdownGroup;