export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface ThemeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export type AllowedTheme = "light" | "dark" | "system";