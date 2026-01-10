// CSS
import styles from "@/components/table/tableContainer.module.css";
// utilities
import React from "react";
// types
import { TableContainerProps } from "@/types/table/table";
const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(({ children, ...props }, ref) => {
    return (
        <div role="region" {...props} className={`${styles.tableContainer} ${props.className || ""}`} ref={ref}>
            {children}
        </div>
    );
});

TableContainer.displayName = "TableContainer";

export default TableContainer;