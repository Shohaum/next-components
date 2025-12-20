// CSS
import styles from "@/components/alert/alertDescription.module.css";
// types
import { AlertDescriptionProps } from "@/types/alert/alert";

const AlertDescription = ({ children }: AlertDescriptionProps) => {
    return <div className={styles.alertDescription}>
        {children}
    </div>;
};

export default AlertDescription;