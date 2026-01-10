"use client";
// CSS
import styles from "./dockItem.module.css";
// utilities
import React, { useCallback } from "react";
// contexts
import { useDockingStation } from "@/contexts/dockingStation";
// types
import { DockItemProps } from "@/types/dockingStation/dockingStation";
import { usePathname } from "next/navigation";

const DockItem = React.forwardRef<HTMLLIElement, DockItemProps>(({ slug, children, ...props }, ref
) => {

    const { setMagnetStyles } = useDockingStation();

    const pathname = usePathname();
    const currentPath = pathname.split("/").pop();

    const onMouseEnter = useCallback(
        (e: React.MouseEvent<HTMLLIElement>) => {
            if (window.innerWidth >= 768) {

                const targetElement = e?.currentTarget;

                const { width, height } = targetElement.getBoundingClientRect();

                setMagnetStyles((prev) => ({
                    ...prev,
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `translate(${targetElement.offsetLeft}px, ${targetElement.offsetTop}px)`,
                    opacity: 1,
                }));
            }
        },
        []
    );

    return (
        <li {...props} ref={ref} aria-label={slug} aria-selected={currentPath === slug} onMouseEnter={onMouseEnter} className={`${styles.dockItem} ${props.className || ""}`}>
            {children}
        </li>
    );
});

DockItem.displayName = "DockItem";

export default DockItem;