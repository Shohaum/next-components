// CSS
import styles from "@/components/table/tableRow.module.css";
// utilities
import React from "react";
// types
import { TableRowProps } from "@/types/table/table";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ children, ...props }, ref) => {
    return (
        <tr {...props} ref={ref} tabIndex={0} className={`${styles.tableRow} ${props.className || ""}`}>
            {children}
        </tr>
    );
});

TableRow.displayName = "TableRow";

export default TableRow