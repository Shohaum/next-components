// CSS
import styles from "@/components/alertDialog/alertDialogAction.module.css"
// types
type AlertDialogAction = {
    onClick?: () => void;
    children: React.ReactNode;
}

const AlertDialogAction = ({ onClick = () => { }, children }: AlertDialogAction) => {
    return (
        <button onClick={onClick} type="button" role="button" title="dialog button" name="dialog button" tabIndex={0} className={styles.alertDialogAction}>
            {children}
        </button>
    );
};

export default AlertDialogAction;