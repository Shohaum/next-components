import { ReactElement } from "react";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface DropdownGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: Array<ReactElement<DropdownItemProps>> | ReactElement<DropdownItemProps>;
};

export interface DropdownItemProps extends React.ComponentProps<"button"> {
    onClick?: () => void,
    children: React.ReactNode;
    asChild?: boolean;
    variant?: "outline" | "destructive";
};

export interface DropdownItemShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
};

export interface DropdownLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
};

export interface DropdownPortalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface DropdownSubProps extends React.HTMLAttributes<HTMLDivElement> {
    children: [ReactElement<DropdownSubTriggerProps>, ReactElement<DropdownSubContentProps>];
};

export interface DropdownSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface DropdownSubTriggerProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
};

export interface DropDownTriggerProps extends React.ComponentProps<"button"> {
    asChild?: boolean;
    children: React.ReactNode;
};

export interface DropdownGroupSeparatorProps extends React.HTMLAttributes<HTMLDivElement> { }