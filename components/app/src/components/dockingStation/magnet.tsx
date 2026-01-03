"use client"
// CSS
import styles from "./magnet.module.css";
// utilities
import React from "react";
// custom hooks
import { useDockingStation } from "@/contexts/dockingStation";
// types
import { MagnetProps } from "@/types/dockingStation/dockingStation";

const Magnet = React.forwardRef<HTMLSpanElement, MagnetProps>(({ ...props }, ref) => {

    const { magnetStyles } = useDockingStation();

    return (
        <span {...props} ref={ref} style={{ ...magnetStyles, ...props.style }} className={`${styles.magnet} ${props.className || ""}`} />
    );
});

Magnet.displayName = "Magnet";

export default Magnet;