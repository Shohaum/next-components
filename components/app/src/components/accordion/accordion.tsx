// CSS
import styles from "@/components/accordion/accordion.module.css";
// utilities
import React, {
    createContext,
    useState,
    useMemo,
} from "react";
// types
import { AccrodionContextType, AccordionProps } from "@/types/accordion/accordion";

export const AccordionContext = createContext<AccrodionContextType | undefined>(undefined);

const Accordion = ({ textWrap = "wrap", isMultiple = false, children }: AccordionProps) => {

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
            <div role="presentation" style={{ textWrap }} className={styles.accordion}>
                {children}
            </div >
        </AccordionContext.Provider>
    );
};

export default Accordion;