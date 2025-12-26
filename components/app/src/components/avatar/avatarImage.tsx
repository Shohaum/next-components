// CSS
import styles from "@/components/avatar/avatarImage.module.css";
// utilities
import { useEffect, useCallback, useRef } from "react";
// contexts
import { useAvatar } from "@/contexts/avatar";
// types
import { AvatarImageProps } from "@/types/avatar/avatar";

const AvatarImage = ({
    src = "",
    alt,
    grayScale = false,
    onStatusChange,
    ...props
}: AvatarImageProps) => {
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
            ref={imgRef}
            src={src}
            alt={alt || ""}
            className={styles.avatarImage}
            onLoad={onLoad}
            onError={onError}
            style={{ display: status === "loaded" ? "block" : "none", filter: grayScale ? "grayscale(100%)" : "" }}
            {...props}
        />
    );
};

export default AvatarImage;
