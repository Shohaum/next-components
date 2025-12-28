// CSS
import styles from "@/components/accordion/accordionItem.module.css";
// utilities
import {
    createContext,
    useState,
    useMemo,
    useContext,
} from "react";
// types
import { AccrodionItemContextType, AccordionItemProps } from "@/types/accordion/accordion";
// contexts
import { AccordionContext } from "@/components/accordion/accordion";

export const AccordionItemContext = createContext<AccrodionItemContextType | undefined>(undefined);

const AccordionItem = ({ id = "", children }: AccordionItemProps) => {

    const [key, setKey] = useState<string>(id);

    const value = useMemo(
        () => ({
            key,
        }),
        [key]
    );

    const isOpen = useContext(AccordionContext)?.openids.includes(id);

    return (
        <AccordionItemContext.Provider value={value}>
            <details className={styles.accordionItem} id={id} open={isOpen}>
                {children}
            </details>
        </AccordionItemContext.Provider>
    );
};

export default AccordionItem;