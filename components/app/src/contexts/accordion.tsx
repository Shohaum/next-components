import React, {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";

type AccrodionContextType = {
    allowMultiple: boolean,
    setAllowMultiple: React.Dispatch<React.SetStateAction<boolean>>,
    openids: string[],
    toggleAccordion: (allowMultiple: boolean, id: string) => void;
};

const AccordionContext = createContext<AccrodionContextType | undefined>(undefined);

type AccordionProps = {
    children: React.ReactNode;
};

export const AccordionProvider = ({ children }: AccordionProps) => {

    const [openids, setOpenids] = useState<string[]>([]);
    const [allowMultiple, setAllowMultiple] = useState<boolean>(false);

    const toggleAccordion = (allowMultiple: boolean, id: string) => {
        if (allowMultiple) {
            if (openids.includes(id)) {
                setOpenids(openids.filter(i => i !== id));
            } else {
                setOpenids([...openids, id]);
            }
        } else {
            if (openids.includes(id)) {
                setOpenids([]);
            } else {
                setOpenids([id]);
            }
        }
    }

    const value = useMemo(
        () => ({
            allowMultiple,
            setAllowMultiple,
            openids,
            toggleAccordion,
        }),
        []
    );

    return (
        <AccordionContext.Provider value={value}>
            {children}
        </AccordionContext.Provider>
    );
};

export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordion must be used within a AccordionProvider");
    }
    return context;
};

type AccrodionItemContextType = {
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>,
};

const AccordionItemContext = createContext<AccrodionItemContextType | undefined>(undefined);

type AccordionItemProps = {
    children: React.ReactNode;
};

export const AccordionItemProvider = ({ children }: AccordionItemProps) => {

    const [id, setId] = useState<string>("");

    const value = useMemo(
        () => ({
            id,
            setId,
        }),
        []
    );

    return (
        <AccordionItemContext.Provider value={value}>
            {children}
        </AccordionItemContext.Provider>
    );
};

export const useAccordionItem = () => {
    const context = useContext(AccordionItemContext);
    if (!context) {
        throw new Error("useAccordion must be used within a AccordionProvider");
    }
    return context;
};