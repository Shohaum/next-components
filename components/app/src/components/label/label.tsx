// CSS
import styles from "@/components/label/label.module.css";
// utilities
import React from "react";
// types
import { LabelProps } from "@/types/label/label";

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    (props, ref) => {
        return <label {...props} ref={ref} className={`${styles.label} ${props.className || ""}`} />;
    }
);

Label.displayName = "Label";

export default Label;