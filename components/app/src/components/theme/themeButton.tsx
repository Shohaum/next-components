// CSS
import styles from "@/components/theme/themeButton.module.css";
// utilities
import React from "react";
// types
import { ThemeButtonProps } from "@/types/theme/theme";

const ThemeButton = React.forwardRef<HTMLButtonElement, ThemeButtonProps>(({ onClick, children, label, active, ...props }, ref) => (
    <button
        {...props}
        ref={ref}
        className={`${styles.themeButton} ${props.className || ""}`}
        aria-checked={active}
        aria-label={label}
        title={label}
        data-active={active}
        type="button"
        role="radio"
        onClick={onClick}
    >
        {children}
    </button>
));

ThemeButton.displayName = "ThemeButton";

export default ThemeButton;