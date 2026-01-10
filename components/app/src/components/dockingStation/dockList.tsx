"use client"
// CSS
import styles from "./dockList.module.css";
// utilities
import React, { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
// contexts
import { useDockingStation } from "@/contexts/dockingStation";
// types
import { DockListProps } from "@/types/dockingStation/dockingStation";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const DockList = React.forwardRef<HTMLUListElement, DockListProps>(({ children, ...props }, ref
) => {
    const pathname = usePathname();

    const currentPath = pathname.split("/").pop();

    const dockerListRef = useRef<HTMLUListElement | null>(null);

    const { setMagnetStyles } = useDockingStation();

    const mergedRef = React.useMemo(
        () => mergeRefs<HTMLUListElement>(ref, dockerListRef),
        [ref]
    );

    const syncMagnetToActive = useCallback(() => {
        if (dockerListRef.current) {
            const activeElement = dockerListRef.current.querySelector<HTMLElement>(
                `[aria-selected="true"]`
            );

            if (activeElement) {
                const { width, height } = activeElement.getBoundingClientRect();
                setMagnetStyles((prev) => ({
                    ...prev,
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `translate(${activeElement.offsetLeft}px, ${activeElement.offsetTop}px)`,
                    opacity: 1,
                }));
            } else {
                // If no match found (e.g., a page not in the dock), hide magnet
                setMagnetStyles((prev) => ({ ...prev, opacity: 0 }));
            }
        }
    }, [currentPath, setMagnetStyles]);

    useEffect(() => {
        syncMagnetToActive();
    }, [syncMagnetToActive]);

    const onMouseMove = useCallback(() => {
        if (window.innerWidth >= 768) {
            setMagnetStyles((prev) => ({
                ...prev,
                opacity: 1,
            }));
        }
    }, []);

    const onMouseLeaveParent = useCallback(() => {
        if (window.innerWidth >= 768) {
            syncMagnetToActive();
        }
    }, []);

    return (
        <ul {...props} ref={mergedRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeaveParent} className={`${styles.dockerList} ${props.className || ""}`}>
            {children}
        </ul>

    );
});

DockList.displayName = "DockList";

export default DockList;