// utilities
import React from "react";
// contexts
import { DropdownSubProvider } from "@/contexts/dropdown";
// types
import { DropdownSubProps } from "@/types/dropdown/dropdown";

const DropdownSub = React.forwardRef<HTMLDivElement, DropdownSubProps>(
    ({ children, ...props }, ref) => {

        return (
            <div {...props} ref={ref}>
                <DropdownSubProvider>
                    {children}
                </DropdownSubProvider>
            </div>
        )
    });

DropdownSub.displayName = "DropdownSub";

export default DropdownSub;