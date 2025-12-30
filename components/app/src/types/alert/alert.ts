export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AlertItemProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "success" | "warn" | "failure" | "normal",
    children: React.ReactNode;
};

export interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};