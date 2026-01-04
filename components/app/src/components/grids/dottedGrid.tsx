// CSS
import styles from "./dottedGrid.module.css";
// utilities
import React from "react";
// types
import { GridProps } from "@/types/grid/grid";

const DottedGrid = React.forwardRef<HTMLDivElement, GridProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={`${styles.dottedGrid} ${props.className || ""}`}
        >
            {children}
        </div>
    )
});

DottedGrid.displayName = "DottedGrid";

export default DottedGrid;