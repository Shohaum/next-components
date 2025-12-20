// CSS
import styles from "@/components/table/tableHeadCell.module.css";
// types
import { TableHeadCellProps } from "@/types/table/table";
const TableHeadCell = ({ children }: TableHeadCellProps) => {
    return (
        <th className={styles.tableHeadCell}>
            {children}
        </th>
    );
}

export default TableHeadCell;