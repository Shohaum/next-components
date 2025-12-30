// CSS
import styles from "@/components/accordion/accordionItemContent.module.css"
// utilities
import { useContext, useRef } from "react";
// contexts
import { AccordionContext } from "./accordion";
import { AccordionItemContext } from "./accordionItem";
// types
import { AccordionItemContentProps } from "@/types/accordion/accordion";

const AccordionItemContent = ({ children, ...props }: AccordionItemContentProps) => {

    const accordionContext = useContext(AccordionContext);
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionContext || !accordionItemContext) {
        return null;
    }

    const contentRef = useRef<HTMLDivElement>(null);

    const isOpen = accordionContext.openids.includes(accordionItemContext.key);

    if (isOpen && contentRef.current) {
        const scrollHeight = contentRef.current.scrollHeight;
        // set --content-height to scrollHeight
        contentRef.current.style.setProperty("--content-height", `${scrollHeight}px`);
        contentRef.current.style.filter = `blur(0px)`;
    }
    else if (contentRef.current) {
        contentRef.current.style.setProperty("--content-height", `0px`);
        contentRef.current.style.filter = `blur(3px)`;
    }

    return (
        <div {...props} ref={contentRef} contentEditable={false} className={styles.accordionItemContent}>
            {children}
        </div>
    );
};

export default AccordionItemContent;