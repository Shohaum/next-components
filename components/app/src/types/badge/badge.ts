export interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "verified";
}