// CSS
import styles from "@/components/card/cardFooter.module.css";
// utilities
import React from "react";
// types
import { CardFooterProps } from "@/types/card/card";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ children, ...props }, ref) => {
        return (
            <div {...props} ref={ref} className={`${styles.cardFooter} ${props.className || ""}`}>
                {children}
            </div>
        );
    }
);

CardFooter.displayName = "CardFooter";

export default CardFooter;