// CSS
import styles from "@/components/input/input.module.css";
// utilities
import React from "react";
// types
import { InputProps } from "@/types/input/input";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return <input {...props} ref={ref} className={`${styles.input} ${props.className || ""}`} />;
    }
);

Input.displayName = "Input";

export default Input;
