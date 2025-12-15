import React, {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";

type DockingStationContextType = {
    magnetStyles: {};
    setMagnetStyles: React.Dispatch<React.SetStateAction<{}>>;
};

const DockingStationContext = createContext<DockingStationContextType | undefined>(undefined);

type DockingStationProps = {
    children: React.ReactNode;
};

export const DockingStationProvider = ({ children }: DockingStationProps) => {

    const [magnetStyles, setMagnetStyles] = useState<{}>({ width: String, opacity: String, transform: String });

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