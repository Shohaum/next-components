"use client";
// utilities
import React from "react";
// CSS
import styles from "./avatar.module.css";
// contexts
import { AvatarProvider } from "@/contexts/avatar";
// types
import { AvatarProps } from "@/types/avatar/avatar";

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
    children,
    width = 0,
    name,
    designation,
    showTooltip = false,
    ...props }, ref) => {

    return (
        <AvatarProvider>
            <span
                {...props}
                ref={ref}
                style={{ width: width, ...props.style }}
                className={styles.avatar}
                role="img"
                aria-label={name || "avatar"}
            >
                {children}

                {showTooltip && (
                    <span aria-label="avatarTooltip" data-slot="avatarTooltip" className={styles.avatarTooltip}>
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </span>
                )}
            </span>
        </AvatarProvider>
    )
});

Avatar.displayName = "Avatar";

export default Avatar;
