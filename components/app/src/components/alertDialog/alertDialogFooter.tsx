// CSS
import styles from "@/components/alertDialog/alertDialogFooter.module.css";
// types
type AlertDialogFooter = {
    children: React.ReactNode;
}

const AlertDialogFooter = ({ children }: AlertDialogFooter) => {
    return (
        <div className={styles.alertDialogFooter}>
            {children}
        </div>
    );
};

export default AlertDialogFooter;