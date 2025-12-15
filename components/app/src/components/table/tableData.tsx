// CSS
import styles from "@/components/table/tableData.module.css";
type TableDataProps = {
    children: React.ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
    return (
        <td className={styles.tableData}>
            {children}
        </td>
    );
}

export default TableData;