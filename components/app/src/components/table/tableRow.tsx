// CSS
import styles from "@/components/table/tableRow.module.css";
// types
import { TableRowProps } from "@/types/table/table";

const TableRow = ({ children }: TableRowProps) => {
    return (
        <tr tabIndex={0} className={styles.tableRow}>
            {children}
        </tr>
    );
}

export default TableRow