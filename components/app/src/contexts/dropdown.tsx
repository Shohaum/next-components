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

export const DropdownProvider = ({ children }: DropDownProps) => {

    const toggleDropdown = () => {
        const dropdown = document.querySelector<HTMLDivElement>('[data-slot="dropdown"]');
        dropdown?.togglePopover();
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

type DropdownSubProps = {
    children: React.ReactNode;
};

export const DropdownSubProvider = ({ children }: DropdownSubProps) => {

    const toggleDropdownSub = () => {
        const dropdownSub = document.querySelector<HTMLDivElement>('[data-slot="dropdown-sub"]');
        dropdownSub?.togglePopover();
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