// utilities
import React from "react";
// CSS
import styles from "@/components/aspectRatio/aspectRatio.module.css";
// types
import { AspectRatioProps } from "@/types/aspectRatio/aspectRatio";

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(({ ratio = 1, children, ...props }, ref) => {

    return (
        <div {...props} data-slot="aspect-ratio" style={{ aspectRatio: ratio, ...props.style }} className={`${styles.aspectRatio} ${props.className || ""}`} ref={ref}>
            {children}
        </div>
    );
});

AspectRatio.displayName = "AspectRatio";

export default AspectRatio;