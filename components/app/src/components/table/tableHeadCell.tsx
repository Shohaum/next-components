// CSS
import styles from "@/components/table/tableHeadCell.module.css";
// utilities
import React from "react";
// types
import { TableHeadCellProps } from "@/types/table/table";
const TableHeadCell = React.forwardRef<HTMLTableCellElement, TableHeadCellProps>(({ children, ...props }, ref) => {
    return (
        <th {...props} ref={ref} className={`${styles.tableHeadCell} ${props.className || ""}`}>
            {children}
        </th>
    );
});

TableHeadCell.displayName = "TableHeadCell";

export default TableHeadCell;