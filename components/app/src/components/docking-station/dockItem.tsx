"use client";
// CSS
import styles from "./dockItem.module.css";
// utilities
import { useCallback } from "react";
// contexts
import { useDockingStation } from "@/contexts/docking-station";

type DockItemProps = {
    children: React.ReactNode;
}

const DockItem = ({ children }: DockItemProps
) => {

    const { setMagnetStyles } = useDockingStation();

    const onMouseEnter = useCallback(
        (e: MouseEvent) => {
            if (window.innerWidth >= 768) {

                const targetElement = e?.target as HTMLElement;

                const { width, height } = targetElement.getBoundingClientRect();

                setMagnetStyles((prev) => ({
                    ...prev,
                    height: `${height}px`,
                    width: `${width}px`,
                    transform: `translate(${targetElement.offsetLeft}px, ${targetElement.offsetTop}px)`,
                    opacity: 1,
                }));
            }
        },
        []
    );

    return (
        <li onMouseEnter={onMouseEnter} className={styles.dockItem}>
            {children}
        </li>
    );
};

export default DockItem;