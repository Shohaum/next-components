// CSS
import styles from "@/components/card/cardContent.module.css";
// utilities
import React from "react";
// types
import { CardContentProps } from "@/types/card/card";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ children, ...props }, ref) => {
        return (
            <div {...props} ref={ref} className={`${styles.cardContent} ${props.className || ""}`}>
                {children}
            </div>
        );
    }
);

CardContent.displayName = "CardContent";

export default CardContent;
