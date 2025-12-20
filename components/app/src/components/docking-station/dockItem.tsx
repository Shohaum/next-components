"use client";
// CSS
import styles from "./dockItem.module.css";
// utilities
import { useCallback } from "react";
// contexts
import { useDockingStation } from "@/contexts/docking-station";
// types
import { DockItemProps } from "@/types/docking-station/dockingStation";

const DockItem = ({ slug, children }: DockItemProps
) => {

    const { setMagnetStyles } = useDockingStation();

    const onMouseEnter = useCallback(
        (e: MouseEvent) => {
            if (window.innerWidth >= 768) {

                const targetElement = e?.target as HTMLElement;

                const { width, height } = targetElement.getBoundingClientRect();

                setMagnetStyles((prev) => ({
                    ...prev,
                    // do not use the height, as it will not always interpret the height of the element properly
                    // better to use a fixed height in the magnet component, which is height 100%
                    width: `${width}px`,
                    // height: `${height}px`,
                    transform: `translate(${targetElement.offsetLeft}px, ${targetElement.offsetTop}px)`,
                    opacity: 1,
                }));
            }
        },
        []
    );

    return (
        <li data-slot={slug} onMouseEnter={onMouseEnter} className={`${styles.dockItem}`}>
            {children}
        </li>
    );
};

export default DockItem;