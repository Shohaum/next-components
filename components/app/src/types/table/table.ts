import { ReactElement } from "react";

export interface TableHeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
};

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: Array<ReactElement<TableHeadCellProps>> | ReactElement<TableHeadCellProps> | Array<ReactElement<TableDataProps>> | ReactElement<TableDataProps>;
};

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: ReactElement<TableRowProps>;
};

export interface TableDataProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
};

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: Array<ReactElement<TableRowProps>>;
}

export interface CaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    children: string;
};

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
};