// CSS
import styles from "./lineGrid.module.css";

type LineGridProps = {
    children: React.ReactNode;
};

const LineGrid = ({ children }: LineGridProps) => {

    return (
        <div className={styles.lineGrid}
        >

            {children}
        </div>
    )
};

export default LineGrid;