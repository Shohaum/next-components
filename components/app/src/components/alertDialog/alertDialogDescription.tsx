// CSS
import styles from "@/components/alertDialog/alertDialogDescription.module.css";
// types
type AlertDialogDescription = {
    children: React.ReactNode;
}

const AlertDialogDescription = ({ children }: AlertDialogDescription) => {
    return (
        <p className={styles.alertDialogDescription}>
            {children}
        </p>
    );
};

export default AlertDialogDescription;