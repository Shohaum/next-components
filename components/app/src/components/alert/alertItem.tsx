// CSS
import styles from "@/components/alert/alertItem.module.css";
// types
import { AlertItemProps } from "@/types/alert/alert";

const AlertItem = ({ type, children }: AlertItemProps) => {

    const colorMap = {
        success: "var(--green-900)",
        warn: "var(--amber-900)",
        failure: "var(--red-900)",
        normal: "var(--text-color)",
    };

    return <div style={{
        "--alert-color": colorMap[type]
    } as React.CSSProperties} className={styles.alertItem}>
        {children}
    </div>;
};

export default AlertItem;