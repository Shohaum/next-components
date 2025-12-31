// utilities
import React from "react";
// CSS
import styles from "@/components/avatar/avatarCollapsed.module.css";
// types
import { AvatarCollapsedProps } from "@/types/avatar/avatar";

const AvatarCollapsed = React.forwardRef<HTMLDivElement, AvatarCollapsedProps>(({ children, ...props }, ref) => {
    return (
        <div ref={ref} className={styles.avatarCollapsed} {...props}>
            {children}
        </div>
    )
});

AvatarCollapsed.displayName = "AvatarCollapsed";

export default AvatarCollapsed;