// utilities
import React from "react";
// types
import { SlotProps } from "@/types/breadcrumb/breadcrumb";

export function Slot({ children, ...props }: SlotProps) {
    if (!React.isValidElement(children)) {
        throw new Error("Slot expects a single React element as a child");
    }

    return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        className: [props.className, (children.props as any).className]
            .filter(Boolean)
            .join(" "),
    });
}