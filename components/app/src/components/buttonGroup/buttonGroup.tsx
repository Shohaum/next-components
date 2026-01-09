// utilities
import React from "react";
// CSS
import styles from "./buttonGroup.module.css";
// types
import { ButtonGroupProps } from "@/types/buttonGroup/buttonGroup";

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
    children,
    ...props
}, ref
) => {

    return (
        <div {...props} ref={ref} className={`${styles.buttonGroup} ${props.className || ""}`}>
            {children}
        </div>
    )
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;