export interface AlertDialogContextType {
    isOpen: boolean;
    showAlertDialog: () => void;
    closeAlertDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    labelId: string;
    descriptionId: string;
};

export interface AlertDialogProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AlertDialogActionProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children: React.ReactNode;
};

export interface AlertDialogCancelProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
};

export interface AlertDialogContentProps extends React.HTMLAttributes<HTMLDialogElement> {
    children: React.ReactNode;
};

export interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
};

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
};

export interface AlertDialogTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
};