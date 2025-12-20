// CSS
import styles from "@/components/alertDialog/alertDialogTitle.module.css";
// types
type AlertDialogTitle = {
    children: React.ReactNode;
}

const AlertDialogTitle = ({ children }: AlertDialogTitle) => {
    return (
        <h3 className={styles.alertDialogTitle}>
            {children}
        </h3>
    );
};

export default AlertDialogTitle;