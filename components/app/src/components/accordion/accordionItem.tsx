// utilities
import React, {
    createContext,
    useState,
    useMemo,
    useContext,
} from "react";
// CSS
import styles from "@/components/accordion/accordionItem.module.css";
// types
import { AccrodionItemContextType, AccordionItemProps } from "@/types/accordion/accordion";
// contexts
import { AccordionContext } from "@/components/accordion/accordion";

export const AccordionItemContext = createContext<AccrodionItemContextType | undefined>(undefined);

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(({ id = "", children, ...props }, ref) => {

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
            <details ref={ref} {...props} className={styles.accordionItem} id={id} open={isOpen}>
                {children}
            </details>
        </AccordionItemContext.Provider>
    );
});

export default AccordionItem;