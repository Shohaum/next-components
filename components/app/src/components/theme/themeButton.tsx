// CSS
import styles from "@/components/theme/themeButton.module.css";
// utilities
import React from "react";
// types
import { ThemeButtonProps } from "@/types/theme/theme";

const ThemeButton = React.forwardRef<HTMLButtonElement, ThemeButtonProps>(({
    children,
    ...props
}, ref
) => {

    return (
        <button {...props} ref={ref} type={"button"} className={`${styles.themeButton} ${props.className || ""}`}>
            {children}
        </button>
    )
});

ThemeButton.displayName = "ThemeButton";

export default ThemeButton;