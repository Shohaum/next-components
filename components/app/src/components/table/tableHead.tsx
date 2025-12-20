// types
import { TableHeadProps } from "@/types/table/table";
const TableHead = ({ children }: TableHeadProps) => {
    return (
        <thead>
            {children}
        </thead>
    );
}

export default TableHead;