"use client"
// CSS
import styles from "./app.module.css";
// Component imports
import Theme from "./src/components/theme/theme";
// component imports
import DottedGrid from "@/components/grids/dottedGrid";

import Table from "@/components/table/table";
import TableBody from "@/components/table/tableBody";
import TableRow from "@/components/table/tableRow";
import TableHead from "@/components/table/tableHead";
import TableHeadCell from "@/components/table/tableHeadCell";
import TableData from "@/components/table/tableData";
import Caption from "@/components/table/caption";

import { data } from "@/data/data";

const App = () => {

    return (
        <main className={styles.app}>
            {/* theme */}
            <Theme />
            {/* line grid */}
            <DottedGrid>

                {/* Table */}
                {/* <div style={{ display: 'inline-block' }}>
                    <Table style={{ background: 'var(--matte-background)' }}>
                        <TableHead>
                            <TableRow>
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
                                        <TableRow key={index}>
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
                        <Caption>A list of your recent invoices</Caption>
                    </Table>
                </div> */}

            </DottedGrid>

        </main >
    )
};

export default App;