"use client"
// CSS
import styles from "./app.module.css";
// Component imports
import Theme from "./src/components/theme/theme";
// component imports
import Dropdown from "./src/components/dropdown/dropdown";
import DropdownTrigger from "@/components/dropdown/dropdownTrigger";
import DropdownContent from "@/components/dropdown/dropdownContent";
import DropdownLabel from "@/components/dropdown/dropdownLabel";
import DropdownGroup from "@/components/dropdown/dropdownGroup";
import DropdownItem from "@/components/dropdown/dropdownItem";
import DropdownItemShortcut from "@/components/dropdown/dropdownItemShortcut";
import DropdownGroupSeparator from "@/components/dropdown/dropdownGroupSeparator";
import DropdownSub from "@/components/dropdown/dropdownSub";
import DropdownSubTrigger from "@/components/dropdown/dropdownSubTrigger";
import DropdownPortal from "@/components/dropdown/dropdownPortal";
import DropdownSubContent from "@/components/dropdown/dropdownSubContent";



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

    const dropdownIcon =
        <svg width="13" height="13" stroke="currentColor" strokeWidth={0} fill="currentColor" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.53032 2.96966L3.99999 2.43933L2.93933 3.49999L3.46966 4.03032L7.29289 7.85355C7.68341 8.24407 8.31658 8.24407 8.7071 7.85354L12.5303 4.03032L13.0607 3.49999L12 2.43933L11.4697 2.96966L7.99999 6.43933L4.53032 2.96966ZM4.53032 7.96966L3.99999 7.43933L2.93933 8.49999L3.46966 9.03032L7.29289 12.8535C7.68341 13.2441 8.31658 13.2441 8.7071 12.8535L12.5303 9.03032L13.0607 8.49999L12 7.43933L11.4697 7.96966L7.99999 11.4393L4.53032 7.96966Z" fill="currentColor">

            </path>
        </svg>

    return (
        <main className={styles.app}>
            {/* theme */}
            <Theme />
            {/* line grid */}
            <DottedGrid>



                {/* dropdown */}
                {/* <Dropdown>

                    <DropdownTrigger>
                        <Button title="dropdown" name="dropdown" type="button">
                            <span>Dropdown</span>
                            <span>{dropdownIcon}</span>
                        </Button>
                    </DropdownTrigger>

                    <DropdownContent width="min(11rem, 50vw)" minWidth="8rem" maxWidth="17.93rem">

                        <DropdownLabel label="Dropdown" />
                        <DropdownGroup>

                            <DropdownItem name="chevron" title="chevron" role="dropdown-item" dataValue="dropdown-item" id="chevron" disabled={false} onClick={() => alert("chevron selected")}>
                                Chevron
                                <DropdownItemShortcut>
                                    ⌘C
                                </DropdownItemShortcut>
                            </DropdownItem>

                            <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="profile" disabled={false} onClick={() => alert("profile selected")}>
                                Profile
                                <DropdownItemShortcut>
                                    ⌘P
                                </DropdownItemShortcut>
                            </DropdownItem>

                            <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="command" disabled={false} onClick={() => alert("command selected")}>
                                Command
                                <DropdownItemShortcut>
                                    ⇧⌘K
                                </DropdownItemShortcut>
                            </DropdownItem>

                        </DropdownGroup>

                        <DropdownGroupSeparator />

                        <DropdownSub>
                            <DropdownSubTrigger>
                                Settings
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6">
                                </path>
                                </svg>
                            </DropdownSubTrigger>

                            <DropdownSubContent>

                                <DropdownLabel label="Settings" />

                                <DropdownGroup>
                                    <DropdownItem role="dropdown-sub-item" dataValue="dropdown-sub-item" name="storage" id="storage" onClick={() => alert("storage selected")}>
                                        Storage
                                        <DropdownItemShortcut>
                                            ⌘S
                                        </DropdownItemShortcut>
                                    </DropdownItem>
                                    <DropdownItem role="dropdown-sub-item" dataValue="dropdown-sub-item" name="container" id="container" onClick={() => alert("container selected")}>
                                        Module
                                        <DropdownItemShortcut>
                                            ⌘M
                                        </DropdownItemShortcut>
                                    </DropdownItem>
                                </DropdownGroup>

                                <DropdownGroupSeparator />

                                <DropdownItem role="dropdown-sub-item" dataValue="dropdown-sub-item" name="module" id="module" onClick={() => alert("module selected")}>
                                    More...
                                </DropdownItem>
                            </DropdownSubContent>

                        </DropdownSub>

                        <DropdownGroupSeparator />

                        <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="slack" disabled={true} onClick={() => alert("slack selected")}>
                            Slack
                        </ DropdownItem>

                        <DropdownGroup>

                            <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="github" disabled={false} onClick={() => alert("github selected")}>
                                Github
                            </DropdownItem>

                            <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="vercel" disabled={false} onClick={() => alert("vercel selected")}>
                                Vercel
                            </DropdownItem>

                        </DropdownGroup>

                        <DropdownGroupSeparator />

                        <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="logout" disabled={false} onClick={() => alert("logout selected")}>
                            logout
                            <DropdownItemShortcut>
                                ⌘Q
                            </DropdownItemShortcut>
                        </DropdownItem>

                        <DropdownItem role="dropdown-item" dataValue="dropdown-item" id="logout" disabled={false} onClick={() => alert("logout selected")}>
                            More...
                            <DropdownItemShortcut>
                                ⌘V
                            </DropdownItemShortcut>
                        </DropdownItem>

                    </DropdownContent>

                </Dropdown> */}

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