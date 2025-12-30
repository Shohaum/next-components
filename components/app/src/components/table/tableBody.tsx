// CSS
import styles from "@/components/table/tableBody.module.css";
// types
import { TableBodyProps } from "@/types/table/table";
const TableBody = ({ children }: TableBodyProps) => {
    return (
        <tbody className={styles.tableBody}>
            {children}
        </tbody>
    );
}

export default TableBody;