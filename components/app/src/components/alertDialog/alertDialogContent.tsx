// CSS
import styles from "@/components/alertDialog/alertDialogContent.module.css";
// cutom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
type AlertDialogContent = {
    children: React.ReactNode;
}

const AlertDialogContent = ({ children }: AlertDialogContent) => {
    const { isOpen } = useAlertDialog();

    console.log(isOpen)

    return (
        <dialog open={isOpen} data-slot="alert-dialog" className={`${styles.alertDialogContent}`}>
            {children}
        </dialog>
    );
};

export default AlertDialogContent;