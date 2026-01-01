// utilities
import React, {
    createContext,
    useState,
    useMemo,
} from "react";
// CSS
import styles from "@/components/accordion/accordion.module.css";
// types
import { AccordionContextType, AccordionProps } from "@/types/accordion/accordion";

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({ isMultiple = false, children, ...props }, ref) => {

    const [openids, setOpenids] = useState<string[]>([]);
    const [allowMultiple, setAllowMultiple] = useState<boolean>(isMultiple);

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
            openids,
            toggleAccordion,
        }),
        [allowMultiple, openids]
    );

    return (
        <AccordionContext.Provider value={value}>
            <div {...props} ref={ref} role="presentation" className={`${styles.accordion} ${props.className || ""}`}>
                {children}
            </div >
        </AccordionContext.Provider>
    );
});

Accordion.displayName = "Accordion";

export default Accordion;