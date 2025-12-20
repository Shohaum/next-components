// CSS
import styles from "@/components/table/table.module.css";
// types
import { TableProps } from "@/types/table/table";
const Table = ({ children }: TableProps) => {
    return (
        <table className={styles.table}>
            {children}
        </table>
    );
}

export default Table;