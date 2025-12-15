// CSS
import styles from "@/components/table/table.module.css";

type TableProps = {
    children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
    return (
        <table className={styles.table}>
            {children}
        </table>
    );
}

export default Table;