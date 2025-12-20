import React, {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";

type AlertDialogContextType = {
    isOpen: boolean;
    showAlertDialog: () => void;
    closeAlertDialog: () => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(undefined);

type AlertDialogProps = {
    children: React.ReactNode;
};

export const AlertDialogProvider = ({ children }: AlertDialogProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const showAlertDialog = () => {
        const AlertDialog = document.querySelector<HTMLDialogElement>('[data-slot="alert-dialog"]');
        AlertDialog?.showModal();
        setIsOpen(true);
    }

    const closeAlertDialog = () => {
        const AlertDialog = document.querySelector<HTMLDialogElement>('[data-slot="alert-dialog"]');
        AlertDialog?.close();
        setIsOpen(false);
    }

    const value = useMemo(
        () => ({
            isOpen,
            showAlertDialog,
            closeAlertDialog,
        }),
        [isOpen]
    );

    return (
        <AlertDialogContext.Provider value={value}>
            {children}
        </AlertDialogContext.Provider>
    );
};

export const useAlertDialog = () => {
    const context = useContext(AlertDialogContext);
    if (!context) {
        throw new Error("useAlertDialog must be used within a AlertDialogProvider");
    }
    return context;
};