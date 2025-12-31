"use client";
// utilities
import React from "react";
// CSS
import styles from "@/components/avatar/avatarImage.module.css";
// utilities
import { useEffect, useCallback, useRef } from "react";
// contexts
import { useAvatar } from "@/contexts/avatar";
// types
import { AvatarImageProps } from "@/types/avatar/avatar";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(({
    src = "",
    alt,
    grayScale = false,
    onStatusChange,
    ...props
}, ref) => {
    const { status, onLoadingStatusChange: setContextStatus } = useAvatar();
    const imgRef = useRef<HTMLImageElement | null>(null);

    const onLoad = useCallback(() => {
        setContextStatus("loaded");
        onStatusChange?.("loaded");
    }, [setContextStatus, onStatusChange]);

    const onError = useCallback(() => {
        setContextStatus("error");
        onStatusChange?.("error");
    }, [setContextStatus, onStatusChange]);

    useEffect(() => {
        if (!src) {
            setContextStatus("error");
            return;
        }

        const img = imgRef.current;
        if (img?.complete && img.naturalWidth > 0) {
            onLoad();
        }
    }, [src, onLoad, setContextStatus]);

    if (status === "error" && !src) return null;

    return (
        <img
            {...props}
            ref={mergeRefs(imgRef, ref)}
            src={src}
            alt={alt || ""}
            className={styles.avatarImage}
            onLoad={onLoad}
            onError={onError}
            style={{ display: status === "loaded" ? "block" : "none", filter: grayScale ? "grayscale(100%)" : "", ...props.style }}
        />
    );
});

AvatarImage.displayName = "AvatarImage";

export default AvatarImage;
