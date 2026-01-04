// CSS
import styles from "@/components/table/tableData.module.css";
// utilities
import React from "react";
// types
import { TableDataProps } from "@/types/table/table";

const TableData = React.forwardRef<HTMLTableCellElement, TableDataProps>(({ children, ...props }, ref) => {
    return (
        <td {...props} ref={ref} className={`${styles.tableData} ${props.className || ""}`}>
            {children}
        </td>
    );
});

TableData.displayName = "TableData";

export default TableData;