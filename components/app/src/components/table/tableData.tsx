// CSS
import styles from "@/components/table/tableData.module.css";
// types
import { TableDataProps } from "@/types/table/table";

const TableData = ({ children }: TableDataProps) => {
    return (
        <td className={styles.tableData}>
            {children}
        </td>
    );
}

export default TableData;