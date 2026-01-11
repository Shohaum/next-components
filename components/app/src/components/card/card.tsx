// CSS
import styles from "@/components/card/card.module.css";
// utilities
import React from "react";
// types
import { CardProps } from "@/types/card/card";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ children, ...props }, ref) => {
        return (
            <div {...props} ref={ref} className={`${styles.card} ${props.className || ""}`}>
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
