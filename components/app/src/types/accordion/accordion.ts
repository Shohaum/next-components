export interface AccordionContextType {
    allowMultiple: boolean,
    openids: string[],
    toggleAccordion: (allowMultiple: boolean, id: string) => void;
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    isMultiple?: boolean;
    children: Array<React.ReactElement<AccordionItemProps>> | React.ReactElement<AccordionItemProps>;
};

export interface AccordionItemContextType {
    key: string;
};

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
    id?: string,
    children: [React.ReactElement<AccordionItemTriggerProps>, React.ReactElement<AccordionItemContentProps>];
};

export interface AccordionItemContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface AccordionItemTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};