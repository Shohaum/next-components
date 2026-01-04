// CSS
import styles from "@/components/table/tableBody.module.css";
// utilities
import React from "react";
// types
import { TableBodyProps } from "@/types/table/table";
const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children, ...props }, ref) => {
    return (
        <tbody {...props} ref={ref} className={`${styles.tableBody} ${props.className || ""}`}>
            {children}
        </tbody>
    );
});

TableBody.displayName = "TableBody";

export default TableBody;