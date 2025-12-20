// CSS
import styles from "@/components/alertDialog/alertDialogTrigger.module.css";
// custom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
type AlertDialogTrigger = {
    children: React.ReactNode;
}

const AlertDialogTrigger = ({ children }: AlertDialogTrigger) => {

    const { showAlertDialog } = useAlertDialog();

    return (
        <div data-slot="alert-trigger" role="trigger" onClick={() => showAlertDialog()} className={styles.alertDialogTrigger}>
            {children}
        </div>
    );
};

export default AlertDialogTrigger;