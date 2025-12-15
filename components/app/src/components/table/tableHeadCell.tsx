// CSS
import styles from "@/components/table/tableHeadCell.module.css";

type TableHeadCellProps = {
    children: React.ReactNode;
}

const TableHeadCell = ({ children }: TableHeadCellProps) => {
    return (
        <th className={styles.tableHeadCell}>
            {children}
        </th>
    );
}

export default TableHeadCell;