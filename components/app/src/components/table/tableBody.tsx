// types
import { TableBodyProps } from "@/types/table/table";
const TableBody = ({ children }: TableBodyProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
}

export default TableBody;