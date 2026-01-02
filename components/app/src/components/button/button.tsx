// utilities
import React from "react";
// CSS
import styles from "./button.module.css";
// types
import { ButtonProps } from "@/types/button/button";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    type = "button",
    ...props
}, ref
) => {

    return (
        <button {...props} type={type} ref={ref} className={`${styles.button} ${props.className || ""}`}>
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;