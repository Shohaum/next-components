// CSS
import styles from "@/components/table/table.module.css";
// types
import { TableProps } from "@/types/table/table";
const Table = ({ children, ...props }: TableProps) => {
    return (
        <div {...props} className={styles.tableContainer}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    );
}

export default Table;