// CSS
import styles from "@/components/alert/alert.module.css";
// types
import { AlertProps } from "@/types/alert/alert";

const Alert = ({ children }: AlertProps) => {
    return <div className={styles.alert}>
        {children}
    </div>;
};

export default Alert;