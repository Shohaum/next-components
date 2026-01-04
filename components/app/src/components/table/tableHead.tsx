// CSS
import styles from "@/components/table/tableHead.module.css";
// utilities
import React from "react";
// types
import { TableHeadProps } from "@/types/table/table";
const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, ...props }, ref) => {
    return (
        <thead {...props} ref={ref} className={`${styles.tableHead} ${props.className || ""}`}>
            {children}
        </thead>
    );
});

TableHead.displayName = "TableHead";

export default TableHead;