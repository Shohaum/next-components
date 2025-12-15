// CSS
import styles from "@/components/table/tableRow.module.css";

type TableRowProps = {
    children: React.ReactNode;
}

const TableRow = ({ children }: TableRowProps) => {
    return (
        <tr tabIndex={0} className={styles.tableRow}>
            {children}
        </tr>
    );
}

export default TableRow