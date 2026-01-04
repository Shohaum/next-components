// CSS
import styles from "@/components/table/caption.module.css";
// utilities
import React from "react";
// types
import { CaptionProps } from "@/types/table/table";
const Caption = React.forwardRef<HTMLTableCaptionElement, CaptionProps>(({ children, ...props }, ref) => {
    return (
        <caption {...props} ref={ref} data-slot="tableCaption" className={`${styles.caption} ${props.className || ""}`}>
            {children}
        </caption>
    );
});

Caption.displayName = "TableCaption";

export default Caption;