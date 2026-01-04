import React, {
    createContext,
    useContext,
    useMemo,
    useId,
    useRef
} from "react";

type DropdownContextType = {
    contentId: string;
    dropdownRef: React.RefObject<HTMLDivElement | null>;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

type DropDownProps = {
    children: React.ReactNode;
};

export const DropdownProvider = ({ children }: DropDownProps) => {

    const uniqueId = useId();
    const contentId = `dropdown-${uniqueId}`;

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const value = useMemo(
        () => ({
            contentId,
            dropdownRef
        }),
        [contentId]
    );

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    );
};

export const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("useDropdown must be used within a DropdownProvider");
    }
    return context;
};

type DropdownSubContextType = {
    contentId: string;
    dropdownSubRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownSubContext = createContext<DropdownSubContextType | undefined>(undefined);

type DropdownSubProps = {
    children: React.ReactNode;
};

export const DropdownSubProvider = ({ children }: DropdownSubProps) => {

    const uniqueId = useId();
    const contentId = `dropdown-${uniqueId}`;

    const dropdownSubRef = useRef<HTMLDivElement | null>(null);

    const value = useMemo(
        () => ({
            contentId,
            dropdownSubRef
        }),
        [contentId]
    );

    return (
        <DropdownSubContext.Provider value={value}>
            {children}
        </DropdownSubContext.Provider>
    );
};

export const useDropdownSub = () => {
    const context = useContext(DropdownSubContext);
    if (!context) {
        throw new Error("useDropdownSub must be used within a DropdownSubProvider");
    }
    return context;
};