import React, {
    createContext,
    useContext,
    useMemo,
} from "react";

type DropdownContextType = {
    toggleDropdown: () => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

type DropDownProps = {
    children: React.ReactNode;
};

type DropDownSubProps = {
    children: React.ReactNode;
};

export const DropdownProvider = ({ children }: DropDownProps) => {

    const toggleDropdown = () => {
        const dropdown = document.querySelectorAll<HTMLDivElement>('[data-value="dropdown"]');
        dropdown[0].togglePopover();
    }

    const value = useMemo(
        () => ({
            toggleDropdown,
        }),
        []
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
    toggleDropdownSub: () => void;
}

const DropdownSubContext = createContext<DropdownSubContextType | undefined>(undefined);

export const DropdownSubProvider = ({ children }: DropDownSubProps) => {

    const toggleDropdownSub = () => {
        const dropdown = document.querySelectorAll<HTMLDivElement>('[data-value="dropdownSub"]');
        dropdown[0].togglePopover();
    }

    const value = useMemo(
        () => ({
            toggleDropdownSub
        }),
        []
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