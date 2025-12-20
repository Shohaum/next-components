// CSS
import styles from "@/components/accordion/accordionItemContent.module.css"
// utilities
import { useContext, useRef } from "react";
// contexts
import { AccordionContext } from "./accordion";
import { AccordionItemContext } from "./accordionItem";
// types
import { AccordionItemContentProps } from "@/types/accordion/accordion";

const AccordionItemContent = ({ children }: AccordionItemContentProps) => {

    const accordionContext = useContext(AccordionContext);
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionContext || !accordionItemContext) {
        return null;
    }

    const contentRef = useRef<HTMLDivElement>(null);

    const isOpen = accordionContext.openids.includes(accordionItemContext.key);

    if (isOpen && contentRef.current) {
        const scrollHeight = contentRef.current.scrollHeight;
        contentRef.current.style.maxHeight = `${scrollHeight}px`;
    }
    else if (contentRef.current) {
        contentRef.current.style.maxHeight = `0px`;
    }


    return (
        <div ref={contentRef} aria-expanded={isOpen} contentEditable={false} className={styles.accordionItemContent}>
            <div className={styles.innerContent}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItemContent;