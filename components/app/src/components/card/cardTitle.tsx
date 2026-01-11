// CSS
import styles from "@/components/card/cardTitle.module.css";
// utilities
import React from "react";
// types
import { CardTitleProps } from "@/types/card/card";

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ children, ...props }, ref) => {
        return (
            <h3 {...props} ref={ref} className={`${styles.cardTitle} ${props.className || ""}`}>
                {children}
            </h3>
        );
    }
);

CardTitle.displayName = "CardTitle";

export default CardTitle;