"use client"
// utilities
import React from "react";
// CSS
import styles from "@/components/alertDialog/alertDialogContent.module.css";
// cutom hook
import { useAlertDialog } from "@/contexts/alertDialog";
// types
import { AlertDialogContentProps } from "@/types/alertDialog/alertDialog";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const AlertDialogContent = React.forwardRef<HTMLDialogElement, AlertDialogContentProps>(({ children, ...props }, ref) => {
    const { isOpen, dialogRef, labelId, descriptionId } = useAlertDialog();

    const mergedRef = React.useMemo(
        () => mergeRefs<HTMLDialogElement>(ref, dialogRef),
        [ref]
    );

    return (
        <dialog {...props} aria-labelledby={labelId} aria-describedby={descriptionId} role="alertdialog" open={isOpen} data-slot="alert-dialog" className={`${styles.alertDialogContent} ${props.className || ""}`} ref={mergedRef}>
            {children}
        </dialog>
    );
});

AlertDialogContent.displayName = "AlertDialogContent";

export default AlertDialogContent;