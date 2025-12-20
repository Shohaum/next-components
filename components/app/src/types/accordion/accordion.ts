export type AccrodionContextType = {
    allowMultiple: boolean,
    openids: string[],
    toggleAccordion: (allowMultiple: boolean, id: string) => void;
};

export type AccordionProps = {
    textWrap?: "wrap" | "pretty" | "balance" | "stable" | "nowrap",
    isMultiple?: boolean;
    children: Array<React.ReactElement<AccordionItemProps>> | React.ReactElement<AccordionItemProps>;
};

export type AccrodionItemContextType = {
    key: string;
};

export type AccordionItemProps = {
    id?: string,
    children: [React.ReactElement<AccordionItemTriggerProps>, React.ReactElement<AccordionItemContentProps>];
};

export type AccordionItemContentProps = {
    children: React.ReactNode;
};

export type AccordionItemTriggerProps = {
    children: React.ReactNode;
};