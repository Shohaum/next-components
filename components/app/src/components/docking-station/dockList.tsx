"use client"
// CSS
import styles from "./dockList.module.css";
// utilities
import { useCallback } from "react";
// contexts
import { useDockingStation } from "@/contexts/docking-station";

type DockListProps = {
    children: React.ReactNode;
}

const DockList = ({ children }: DockListProps
) => {

    const { setMagnetStyles } = useDockingStation();

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
            setMagnetStyles((prev) => ({ ...prev, opacity: 0 }));
        }
    }, []);

    return (
        <ul onMouseMove={onMouseMove} onMouseLeave={onMouseLeaveParent} className={styles.dockerList}>
            {children}
        </ul>

    );
};

export default DockList;