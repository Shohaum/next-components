// CSS
import styles from "@/components/alertDialog/alertDialogHeader.module.css";
// types
type AlertDialogHeader = {
    children: React.ReactNode;
}

const AlertDialogHeader = ({ children }: AlertDialogHeader) => {
    return (
        <div className={styles.alertDialogHeader}>
            {children}
        </div>
    );
};

export default AlertDialogHeader;