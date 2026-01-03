// utilities
import { useContext, useRef, useLayoutEffect } from "react";
// CSS
import styles from "@/components/accordion/accordionItemContent.module.css"
// contexts
import { AccordionContext } from "./accordion";
import { AccordionItemContext } from "./accordionItem";
// types
import { AccordionItemContentProps } from "@/types/accordion/accordion";

const AccordionItemContent = ({ children, ...props }: AccordionItemContentProps) => {

    const accordionContext = useContext(AccordionContext);
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionContext) {
        throw new Error("AccordionItemContent must be used inside <Accordion>");
    }
    if (!accordionItemContext) {
        throw new Error("AccordionItemContent must be used inside <AccordionItem>");
    }

    const contentRef = useRef<HTMLDivElement>(null);

    const isOpen = accordionContext.openids.includes(accordionItemContext.key);

    // use useLayoutEffect (instead of useEffect) as it runs before paint
    useLayoutEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        if (isOpen) {
            element.style.setProperty("--content-height", `${element.scrollHeight}px`);
            element.style.setProperty("--blur-radius", "0px");
        } else {
            element.style.setProperty("--content-height", "0px");
            element.style.setProperty("--blur-radius", "3px");
        }
    }, [isOpen]);

    return (
        <div {...props} id={`${accordionItemContext.key}-content`} aria-labelledby={`${accordionItemContext.key}-trigger`} ref={contentRef} className={`${styles.accordionItemContent} ${props.className || ""}`}>
            {children}
        </div>
    );
};

AccordionItemContent.displayName = "AccordionItemContent";

export default AccordionItemContent;