export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "verified";
}