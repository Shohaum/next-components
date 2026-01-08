export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface ThemeButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
}
