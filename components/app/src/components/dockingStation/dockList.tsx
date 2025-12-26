"use client"
// CSS
import styles from "./dockList.module.css";
// utilities
import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
// contexts
import { useDockingStation } from "@/contexts/docking-station";
// types
import { DockListProps } from "@/types/docking-station/dockingStation";

const DockList = ({ children }: DockListProps
) => {
    const pathname = usePathname();

    const currentPath = pathname.split("/").pop();

    const dockerListRef = useRef<HTMLUListElement | null>(null);

    const { setMagnetStyles } = useDockingStation();

    const syncMagnetToActive = useCallback(() => {
        if (dockerListRef.current) {
            const activeElement = dockerListRef.current.querySelector<HTMLElement>(
                `[data-slot="${currentPath}"]`
            );

            if (activeElement) {
                const { width } = activeElement.getBoundingClientRect();
                setMagnetStyles((prev) => ({
                    ...prev,
                    width: `${width}px`,
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
        <ul ref={dockerListRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeaveParent} className={styles.dockerList}>
            {children}
        </ul>

    );
};

export default DockList;