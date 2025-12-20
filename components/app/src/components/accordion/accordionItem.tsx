// CSS
import styles from "@/components/accordion/accordionItem.module.css";
// utilities
import React, {
    createContext,
    useState,
    useMemo,
} from "react";
// types
import { AccrodionItemContextType, AccordionItemProps } from "@/types/accordion/accordion";

export const AccordionItemContext = createContext<AccrodionItemContextType | undefined>(undefined);

const AccordionItem = ({ id = "", children }: AccordionItemProps) => {

    const [key, setKey] = useState<string>(id);

    const value = useMemo(
        () => ({
            key,
        }),
        [key]
    );

    return (
        <AccordionItemContext.Provider value={value}>
            <div className={styles.accordionItem} id={id}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
};

export default AccordionItem;