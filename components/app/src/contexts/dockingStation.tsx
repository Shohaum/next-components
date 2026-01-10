"use client"
import React, {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";
// types
import { DockingStationContextType, MagnetStyles } from "@/types/dockingStation/dockingStation";

const DockingStationContext = createContext<DockingStationContextType | undefined>(undefined);

type DockingStationProps = {
    children: React.ReactNode;
};

export const DockingStationProvider = ({ children }: DockingStationProps) => {

    const [magnetStyles, setMagnetStyles] = useState<MagnetStyles>({ width: "0px", opacity: 0, transform: "translate(0px, 0px)" });

    const value = useMemo(
        () => ({
            magnetStyles,
            setMagnetStyles
        }),
        [magnetStyles]
    );

    return (
        <DockingStationContext.Provider value={value}>
            {children}
        </DockingStationContext.Provider>
    );
};

export const useDockingStation = () => {
    const context = useContext(DockingStationContext);
    if (!context) {
        throw new Error("useDockingStation must be used within a DockingStationProvider");
    }
    return context;
};