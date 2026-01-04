// CSS
import styles from "./lineGrid.module.css";
// utilities
import React from "react";
// types
import { GridProps } from "@/types/grid/grid";

const LineGrid = React.forwardRef<HTMLDivElement, GridProps>(({ children, ...props }, ref) => {

    return (
        <div {...props} ref={ref} className={`${styles.lineGrid} ${props.className || ""}`}
        >
            {children}
        </div>
    )
});

LineGrid.displayName = "LineGrid";

export default LineGrid;