// CSS
import styles from "@/components/accordion/accordionItemTrigger.module.css";
// utilities
import { useContext } from "react";
// contexts
import { AccordionContext } from "./accordion";
import { AccordionItemContext } from "./accordionItem";
// types
import { AccordionItemTriggerProps } from "@/types/accordion/accordion";

const AccordionItemTrigger = ({ children, ...props }: AccordionItemTriggerProps) => {

    const accordionContext = useContext(AccordionContext);
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionContext || !accordionItemContext) {
        return null;
    }

    const isOpen = accordionContext.openids.includes(accordionItemContext.key);

    return (
        <summary data-state={isOpen ? 'open' : 'closed'} id={`${accordionItemContext.key}-trigger`} aria-controls={`${accordionItemContext.key}-content`} aria-expanded={isOpen} {...props} tabIndex={0} className={styles.accordionItemTrigger} onClick={(e) => {
            e.preventDefault();
            accordionContext?.toggleAccordion(accordionContext?.allowMultiple, accordionItemContext?.key)
        }}>
            {children}
            <svg width="15" height="15" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z" fill="currentColor"></path>
            </svg>
        </summary>
    );
};

export default AccordionItemTrigger;