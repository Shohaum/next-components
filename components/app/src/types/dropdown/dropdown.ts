import { ReactElement } from "react";

export type DropdownProps = {
    children: [ReactElement<DropDownTriggerProps>, ReactElement<DropdownContentProps>];
};

export type DropdownContentProps = {
    children:
    ReactElement<DropdownLabelProps> |
    Array<ReactElement<DropdownLabelProps>> |
    ReactElement<DropdownItemProps> |
    Array<ReactElement<DropdownItemProps>> |
    ReactElement<DropdownGroupProps> |
    Array<ReactElement<DropdownGroupProps>> |
    ReactElement<DropdownSubProps> |
    Array<ReactElement<DropdownSubProps>> |
    ReactElement<DropdownGroupSeparatorProps> |
    Array<ReactElement<DropdownGroupSeparatorProps>>;
};

export type DropdownGroupProps = {
    children: Array<ReactElement<DropdownItemProps>> | ReactElement<DropdownItemProps>;
};

export type DropdownItemProps = {
    id?: string,
    title?: string,
    disabled?: boolean,
    autofocus?: boolean,
    name?: string,
    type?: "button" | "reset" | "submit",
    role?: string,
    dataValue?: string,
    onClick?: () => void,
    children?: React.ReactNode;
};

export type DropdownItemShortcutProps = {
    children: React.ReactNode;
};

export type DropdownLabelProps = {
    label: string;
};

export type DropdownPortalProps = {
    children: React.ReactNode;
};

export type DropdownSubProps = {
    children: [ReactElement<DropdownSubTriggerProps>, ReactElement<DropdownSubContentProps>];
};

export type DropdownSubContentProps = {
    children: 
    ReactElement<DropdownLabelProps> |
    Array<ReactElement<DropdownLabelProps>> |
    ReactElement<DropdownItemProps> |
    Array<ReactElement<DropdownItemProps>> |
    ReactElement<DropdownGroupProps> |
    Array<ReactElement<DropdownGroupProps>> |
    ReactElement<DropdownSubProps> |
    Array<ReactElement<DropdownSubProps>> |
    ReactElement<DropdownGroupSeparatorProps> |
    Array<ReactElement<DropdownGroupSeparatorProps>>;;
};

export type DropdownSubTriggerProps = {
    children: React.ReactNode;
};

export type DropDownTriggerProps = {
    children: React.ReactNode;
};

export type DropdownGroupSeparatorProps = Record<string, never>;