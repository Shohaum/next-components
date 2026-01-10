// CSS
import styles from "@/components/table/table.module.css";
// utilities
import React from "react";
// types
import { TableProps } from "@/types/table/table";
const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children, ...props }, ref) => {
    return (
        <table {...props} ref={ref} className={`${styles.table} ${props.className || ""}`}>
            {children}
        </table>
    );
});

Table.displayName = "Table";

export default Table;