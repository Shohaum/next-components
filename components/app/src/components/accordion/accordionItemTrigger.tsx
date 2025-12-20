// CSS
import styles from "@/components/accordion/accordionItemTrigger.module.css";
// utilities
import { useContext } from "react";
// contexts
import { AccordionContext } from "./accordion";
import { AccordionItemContext } from "./accordionItem";
// types
import { AccordionItemTriggerProps } from "@/types/accordion/accordion";

const AccordionItemTrigger = ({ children }: AccordionItemTriggerProps) => {

    const accordionContext = useContext(AccordionContext);
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionContext || !accordionItemContext) {
        return null;
    }

    const isOpen = accordionContext.openids.includes(accordionItemContext.key);

    return (
        <div className={styles.accordionItemTrigger}>
            <h3>
                <button tabIndex={0} title="accordion" name="accordion" type="button" role="button" onClick={() => accordionContext?.toggleAccordion(accordionContext?.allowMultiple, accordionItemContext?.key)}>
                    {children}

                    <svg style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms ease-in-out',
                        flexShrink: '0'
                    }} width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor">
                        </path>
                    </svg>
                </button>
            </h3>
        </div>
    );
};

export default AccordionItemTrigger;