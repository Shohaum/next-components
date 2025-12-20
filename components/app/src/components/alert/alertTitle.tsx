// CSS
import styles from "@/components/alert/alertTitle.module.css";
// types
import { AlertTitleProps } from "@/types/alert/alert";

const AlertTitle = ({ children }: AlertTitleProps) => {
    return <h4 className={styles.alertTitle}>
        {children}
    </h4>;
};

export default AlertTitle;