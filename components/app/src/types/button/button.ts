export interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}