// CSS
import styles from "@/components/card/cardHeader.module.css";
// utilities
import React from "react";
// types
import { CardHeaderProps } from "@/types/card/card";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ children, ...props }, ref) => {
        return (
            <div {...props} ref={ref} className={`${styles.cardHeader} ${props.className || ""}`}>
                {children}
            </div>
        );
    }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;