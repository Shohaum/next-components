// CSS
import styles from "./dottedGrid.module.css";

type DottedGridProps = {
    children: React.ReactNode;
};

const DottedGrid = ({ children }: DottedGridProps) => {

    return (
        <div className={styles.dottedGrid}
        >

            {children}
        </div>
    )
};

export default DottedGrid;