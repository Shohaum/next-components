"use client"
// component imports
import TableContainer from "@/components/table/tableContainer";
import Table from "@/components/table/table";
import TableBody from "@/components/table/tableBody";
import TableRow from "@/components/table/tableRow";
import TableHead from "@/components/table/tableHead";
import TableHeadCell from "@/components/table/tableHeadCell";
import TableData from "@/components/table/tableData";
import Caption from "@/components/table/caption";
// data
import { data } from "@/data/data";

const App = () => {

    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Table */}
            <TableContainer style={{ background: 'var(--matte-background)', outline: '1px solid var(--border-color)' }}>
                <Table>
                    <TableHead style={{ borderBottom: '1px solid var(--border-color)', fontSize: "var(--size-sm)", textAlign: "left" }}>
                        <TableRow style={{ fontWeight: 300 }}>
                            <TableHeadCell>
                                <span>Name</span>
                            </TableHeadCell>
                            <TableHeadCell>
                                <span>Email</span>
                            </TableHeadCell>
                            <TableHeadCell>
                                <span>Country</span>
                            </TableHeadCell>
                            <TableHeadCell>
                                <span>Alias</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map((item, index) => {
                                return (
                                    <TableRow style={{ fontSize: "var(--size-sm)", fontWeight: 300, textAlign: "left" }} key={index}>
                                        <TableData>
                                            {item.name}
                                        </TableData>
                                        <TableData>
                                            {item.email}
                                        </TableData>
                                        <TableData>
                                            {item.country}
                                        </TableData>
                                        <TableData>
                                            {item.alias}
                                        </TableData>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    <Caption style={{ fontSize: "var(--size-xsm)", color: "var(--gray-600)" }}>A list of your recent invoices</Caption>
                </Table>
            </TableContainer>
        </main >
    )
};

export default App;