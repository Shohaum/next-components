// CSS
import styles from "@/components/card/cardAction.module.css";
// utilities
import React from "react";
// types
import { CardActionProps } from "@/types/card/card";

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
    ({ children, ...props }, ref) => {
        return (
            <div {...props} ref={ref} className={`${styles.cardAction} ${props.className || ""}`}>
                {children}
            </div>
        );
    }
);

CardAction.displayName = "CardAction";

export default CardAction;
