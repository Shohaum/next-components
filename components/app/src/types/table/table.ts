import { ReactElement } from "react";

export type TableHeadCellProps = {
    children: React.ReactNode;
};

export type TableRowProps = {
    children: Array<ReactElement<TableHeadCellProps>> | ReactElement<TableHeadCellProps> | Array<ReactElement<TableDataProps>> | ReactElement<TableDataProps>;
};

export type TableHeadProps = {
    children: ReactElement<TableRowProps>;
};

export type TableDataProps = {
    children: React.ReactNode;
};

export type TableBodyProps = {
    children: Array<ReactElement<TableRowProps>>;
}

export type CaptionProps = {
    children: string;
};

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};