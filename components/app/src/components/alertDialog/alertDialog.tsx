// CSS
import styles from "@/components/alertDialog/alertDialog.module.css";
// context
import { AlertDialogProvider } from "@/contexts/alertDialog";
// types
type AlertDialog = {
    children: React.ReactNode;
}

const AlertDialog = ({ children }: AlertDialog) => {
    return (
        <div className={styles.alertDialog}>
            <AlertDialogProvider>
                {children}
            </AlertDialogProvider>
        </div>
    );
};

export default AlertDialog;