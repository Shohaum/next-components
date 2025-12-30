// utilities
import React, {
    createContext,
    useState,
    useMemo,
    useContext,
    useId,
} from "react";
// CSS
import styles from "@/components/accordion/accordionItem.module.css";
// types
import { AccordionItemContextType, AccordionItemProps } from "@/types/accordion/accordion";
// contexts
import { AccordionContext } from "@/components/accordion/accordion";

export const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(({ id = "", children, ...props }, ref) => {

    const itemId = useId();

    const [key, setKey] = useState<string>(id !== "" ? id : itemId);

    const value = useMemo(
        () => ({
            key,
        }),
        [key]
    );

    const isOpen = useContext(AccordionContext)?.openids.includes(key);

    return (
        <AccordionItemContext.Provider value={value}>
            <details ref={ref} {...props} className={styles.accordionItem} id={key} aria-expanded={isOpen} open={isOpen}>
                {children}
            </details>
        </AccordionItemContext.Provider>
    );
});

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;