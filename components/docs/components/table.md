# Table

A semantic and accessible table component for displaying rows of data.

## Overview

The `Table` component system is designed to be composable and accessible. It separates the scrollable container from the table structure to ensure proper keyboard navigation and screen reader support. It provides a set of sub-components that map directly to native HTML table elements (`<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<caption>`), ensuring valid semantics.

## Features

-   **Semantic HTML**: Uses native tags (`<table>`, `caption`, etc.) for optimal accessibility.
-   **Scrollable Container**: `TableContainer` handles horizontal scrolling and provides `role="region"` for accessibility.
-   **Type Safe**: Props extend standard React HTML attributes (e.g., `ThHTMLAttributes` for `TableHeadCell`), allowing standard attributes like `scope`, `colSpan`, and `align`.
-   **Styled**: Encapsulated styles via CSS Modules.

## Usage

```tsx
import Table from "@/components/table/table";
import TableContainer from "@/components/table/tableContainer";
import TableHead from "@/components/table/tableHead";
import TableHeadCell from "@/components/table/tableHeadCell";
import TableBody from "@/components/table/tableBody";
import TableRow from "@/components/table/tableRow";
import TableData from "@/components/table/tableData";
import Caption from "@/components/table/caption";

const MyTable = () => (
    <TableContainer>
        <Table>
            <Caption>Recent Invoices</Caption>
            <TableHead>
                <TableRow>
                     <TableHeadCell>Name</TableHeadCell>
                     <TableHeadCell>Amount</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableData>John Doe</TableData>
                    <TableData>$100.00</TableData>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
```

## API Reference

### TableContainer
A wrapper `div` that handles overflow and scrolling. It automatically includes `role="region"` and `tabIndex={0}` when scrollable to ensure keyboard users can access the table content.
- **Props**: `TableContainerProps` (extends `React.HTMLAttributes<HTMLDivElement>`)
    - `children`: ReactNode

### Table
The root `<table>` element.
- **Props**: `TableProps` (extends `React.TableHTMLAttributes<HTMLTableElement>`)
    - `children`: ReactNode

### TableHead
Renders a `<thead>` element.
- **Props**: `TableHeadProps` (extends `React.HTMLAttributes<HTMLTableSectionElement>`)
    - `children`: ReactNode (Typically `TableRow`)

### TableBody
Renders a `<tbody>` element.
- **Props**: `TableBodyProps` (extends `React.HTMLAttributes<HTMLTableSectionElement>`)
    - `children`: ReactNode (Array of `TableRow`)

### TableRow
Renders a `<tr>` element.
- **Props**: `TableRowProps` (extends `React.HTMLAttributes<HTMLTableRowElement>`)
    - `children`: ReactNode

### TableHeadCell
Renders a `<th>` element. Use this inside `TableHead`.
- **Props**: `TableHeadCellProps` (extends `React.ThHTMLAttributes<HTMLTableCellElement>`)
    - `children`: ReactNode
    - `scope`: `string` (Optional, e.g., "col", "row")
    - `align`: `string` (Optional)

### TableData
Renders a `<td>` element. Use this inside `TableBody`.
- **Props**: `TableDataProps` (extends `React.TdHTMLAttributes<HTMLTableCellElement>`)
    - `children`: ReactNode
    - `colSpan`: `number` (Optional)
    - `rowSpan`: `number` (Optional)

### Caption
Renders a `<caption>` element. Always place this as the first child of `Table` for accessibility.
- **Props**: `CaptionProps` (extends `React.HTMLAttributes<HTMLTableCaptionElement>`)
    - `children`: ReactNode
