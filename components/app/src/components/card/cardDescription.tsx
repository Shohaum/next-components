// CSS
import styles from "@/components/card/cardDescription.module.css";
// utilities
import React from "react";
// types
import { CardDescriptionProps } from "@/types/card/card";

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ children, ...props }, ref) => {
        return (
            <p {...props} ref={ref} className={`${styles.cardDescription} ${props.className || ""}`}>
                {children}
            </p>
        );
    }
);

CardDescription.displayName = "CardDescription";

export default CardDescription;
