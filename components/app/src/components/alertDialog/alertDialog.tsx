// context
import { AlertDialogProvider } from "@/contexts/alertDialog";
// types
import { AlertDialogProps } from "@/types/alertDialog/alertDialog";

const AlertDialog = ({ children }: AlertDialogProps) => {
    return (
        <AlertDialogProvider>
            {children}
        </AlertDialogProvider>
    );
};

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;