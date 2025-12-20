// CSS
import styles from "@/components/alertDialog/alertDialogCancel.module.css";
// custom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
type AlertDialogCancel = {
    children: React.ReactNode;
}

const AlertDialogCancel = ({ children }: AlertDialogCancel) => {

    const { closeAlertDialog } = useAlertDialog();

    return (
        <button type="button" role="button" title="dialog button" name="dialog button" tabIndex={0} className={styles.alertDialogCancel} onClick={closeAlertDialog}>
            {children}
        </button>
    );
};

export default AlertDialogCancel;