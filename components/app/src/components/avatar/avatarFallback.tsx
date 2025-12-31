"use client";
// utilities
import React from "react";
// CSS
import styles from "@/components/avatar/avatarFallback.module.css";
// contexts
import { useAvatar } from "@/contexts/avatar";
// types
import { AvatarFallbackProps } from "@/types/avatar/avatar";

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(({ children, className, ...props }, ref) => {
    const { status } = useAvatar();

    if (status === 'loaded') {
        return null;
    }

    return (
        <span ref={ref} className={styles.avatarFallback} role="presentation" {...props}>
            {children}
        </span>
    )
});

AvatarFallback.displayName = "AvatarFallback";

export default AvatarFallback;
