"use client"
// CSS
import styles from "./button.module.css";
// types
import { ButtonProps } from "@/types/button/button";

const Button = ({
    id = "",
    title = "",
    disabled = false,
    autofocus = false,
    name = "button",
    type = "button",
    role = "button",
    dataValue = "",
    onClick = () => { },

    color = "",
    background = "",
    borderColor = "",
    children }: ButtonProps
) => {

    const btnStyles = {
        ...(color ? { color } : {}),
        "--btn-bg-color": background || undefined,
        "--btn-border-color": borderColor || undefined
    };

    return (
        <button className={styles.button}
            id={id}
            title={title} disabled={disabled}
            onClick={onClick}
            name={name}
            type={type}
            role={role}
            tabIndex={0}
            autoFocus={autofocus}
            data-value={dataValue}
            style={btnStyles}>

            {children}
        </button>
    )
};

export default Button;