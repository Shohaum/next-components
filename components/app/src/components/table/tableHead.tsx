// CSS
import styles from "@/components/table/tableHead.module.css";
// types
import { TableHeadProps } from "@/types/table/table";
const TableHead = ({ children }: TableHeadProps) => {
    return (
        <thead className={styles.tableHead}>
            {children}
        </thead>
    );
}

export default TableHead;