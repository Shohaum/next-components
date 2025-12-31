import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useRef,
    useId,
} from "react";

import { AlertDialogContextType } from "../types/alertDialog/alertDialog";

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(undefined);

type AlertDialogProps = {
    children: React.ReactNode;
};

export const AlertDialogProvider = ({ children }: AlertDialogProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const labelId = useId();
    const descriptionId = useId();

    const showAlertDialog = () => {
        dialogRef.current?.showModal();
        setIsOpen(true);
    }

    const closeAlertDialog = () => {
        dialogRef.current?.close();
        setIsOpen(false);
    }

    const value = useMemo(
        () => ({
            isOpen,
            showAlertDialog,
            closeAlertDialog,
            dialogRef,
            labelId,
            descriptionId,
        }),
        [isOpen, labelId, descriptionId]
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