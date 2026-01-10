"use client"

// components
import ButtonGroup from "@/components/buttonGroup/buttonGroup";
import Button from "@/components/button/button";

import Dropdown from "@/components/dropdown/dropdown";
import DropdownTrigger from "@/components/dropdown/dropdownTrigger";
import DropdownContent from "@/components/dropdown/dropdownContent";
import DropdownLabel from "@/components/dropdown/dropdownLabel";
import DropdownGroup from "@/components/dropdown/dropdownGroup";
import DropdownItem from "@/components/dropdown/dropdownItem";
import DropdownItemShortcut from "@/components/dropdown/dropdownItemShortcut";
import DropdownGroupSeparator from "@/components/dropdown/dropdownGroupSeparator";
import DropdownSub from "@/components/dropdown/dropdownSub";
import DropdownSubTrigger from "@/components/dropdown/dropdownSubTrigger";
import DropdownSubContent from "@/components/dropdown/dropdownSubContent";

const App = () => {

    const backIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z" fill="currentColor">
            </path>
        </svg>
    const moreIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor">
            </path>
        </svg>

    const readIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5015 3.85991L11.0459 4.45567L7.70569 8.82361L7.29118 8.4091L6.63564 7.75356L9.85434 3.5445L10.3099 2.94873L11.5015 3.85991ZM4.1092 11.5911L4.9023 12.3842C4.2256 12.8947 3.24471 12.8554 2.61219 12.223L0.669181 10.2804L0.138794 9.75014L1.19934 8.68937L1.72973 9.21964L3.67274 11.1622C3.68536 11.1748 3.69895 11.1858 3.71326 11.1951L4.1092 11.5911ZM15.296 4.45568L15.7515 3.85991L14.56 2.94874L14.1044 3.54451L8.29816 11.1373C8.20632 11.2574 8.02973 11.2691 7.92281 11.1623L5.97971 9.21964L5.44932 8.68937L4.38879 9.75017L4.91918 10.2804L6.86228 12.223C7.6107 12.9713 8.84683 12.8892 9.48969 12.0485L15.296 4.45568Z" fill="currentColor">
            </path>
        </svg>

    const trashIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z" fill="currentColor">
            </path>
        </svg>

    const tagIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.5H6.34315C7.00619 1.5 7.64207 1.76339 8.11091 2.23223L13.8787 8L8 13.8787L2.23223 8.11091C1.76339 7.64207 1.5 7.00619 1.5 6.34315V1.5ZM16 8L14.9393 6.93934L9.17157 1.17157C8.42143 0.421427 7.40401 0 6.34315 0H1.5H0V1.5V6.34315C0 7.40401 0.421426 8.42143 1.17157 9.17157L6.93934 14.9393L8 16L9.06066 14.9393L14.9393 9.06066L16 8ZM4.5 5.25C4.91421 5.25 5.25 4.91421 5.25 4.5C5.25 4.08579 4.91421 3.75 4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5C3.75 4.91421 4.08579 5.25 4.5 5.25Z" fill="currentColor">
            </path>
        </svg>

    const filterIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 0H1.75H14.25H15V0.75V3V3.31066L14.7803 3.53033L10.5 7.81066V15.25V16H9.75H9H8.7816L8.59734 15.8827L5.84734 14.1327L5.5 13.9117V13.5V7.81066L1.21967 3.53033L1 3.31066V3V0.75V0ZM2.5 1.5V2.68934L6.78033 6.96967L7 7.18934V7.5V13.0883L9 14.361V7.5V7.18934L9.21967 6.96967L13.5 2.68934V1.5H2.5Z" fill="currentColor">
            </path>
        </svg>

    const calendarIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z" fill="currentColor">
            </path>
        </svg>

    const timeIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.25 1.25V2.03971C5.87928 2.18571 4.62678 2.72736 3.6089 3.54824L3.03033 2.96967L2.5 2.43934L1.43934 3.5L1.96967 4.03033L2.54824 4.6089C1.57979 5.80976 1 7.33717 1 9C1 12.866 4.13401 16 8 16C11.866 16 15 12.866 15 9C15 7.33717 14.4202 5.80976 13.4518 4.6089L14.0303 4.03033L14.5607 3.5L13.5 2.43934L12.9697 2.96967L12.3911 3.54824C11.3732 2.72736 10.1207 2.18571 8.75 2.03971V1.25H9.25H10V-0.25H9.25H8.75H7.25H6.75H6V1.25H6.75H7.25ZM2.5 9C2.5 5.96243 4.96243 3.5 8 3.5C11.0376 3.5 13.5 5.96243 13.5 9C13.5 12.0376 11.0376 14.5 8 14.5C4.96243 14.5 2.5 12.0376 2.5 9ZM8.75 6.75V6H7.25V6.75V9V9.75H8.75V9V6.75Z" fill="currentColor">
            </path>
        </svg>

    const archiveIcon =
        <svg width="13" height="13" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3.5H14.5V5.5H13.5H2.5H1.5V3.5ZM1 7H0V5.5V3.5V2H1.5H14.5H16V3.5V5.5V7H15V12.5C15 13.8807 13.8807 15 12.5 15H3.5C2.11929 15 1 13.8807 1 12.5V7ZM2.5 7V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V7H2.5ZM6 9.5H6.75H9.25H10V11H9.25H6.75H6V9.5Z" fill="currentColor">
            </path>
        </svg>

    return (
        <div style={{
            width: "100%",
            height: "100dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ display: "flex", gap: "1rem" }}>
                <ButtonGroup style={{ background: "var(--matte-background)" }}>
                    <Button aria-label="Go Back">
                        {backIcon}
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ background: "var(--matte-background)" }}>
                    <Button style={{ fontSize: "var(--size-xsm)" }}>Archive</Button>
                    <Button style={{ fontSize: "var(--size-xsm)" }}>Message</Button>
                    <Button style={{ fontSize: "var(--size-xsm)" }}>Report</Button>
                </ButtonGroup>
                <ButtonGroup style={{ background: "var(--matte-background)" }}>
                    <Button style={{ fontSize: "var(--size-xsm)" }}>Snooze</Button>
                    <Dropdown>
                        <DropdownTrigger asChild>
                            <Button aria-label="More Options">
                                {moreIcon}
                            </Button>
                        </DropdownTrigger>
                        <DropdownContent style={{ width: "min(11rem, 50vw)", minWidth: "8rem", maxWidth: "17.93rem", maxHeight: "20rem", background: "var(--matte-background)", scrollbarColor: "var(--gray-500) transparent", outlineColor: "var(--border-color)" }}>
                            <DropdownGroup>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {readIcon}
                                    Mark as Read
                                </DropdownItem>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {archiveIcon}
                                    Archive
                                </DropdownItem>
                            </DropdownGroup>
                            <DropdownGroupSeparator />
                            <DropdownGroup>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {timeIcon}
                                    Snooze
                                </DropdownItem>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {calendarIcon}
                                    Add to Calendar
                                </DropdownItem>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {filterIcon}
                                    Add to List
                                </DropdownItem>
                                <DropdownSub>
                                    <DropdownSubTrigger style={{ fontSize: "var(--size-xsm)" }}>
                                        {tagIcon}
                                        Label As...
                                    </DropdownSubTrigger>
                                    <DropdownSubContent style={{ width: "min(11rem, 50vw)", minWidth: "8rem", maxWidth: "17.93rem", maxHeight: "20rem", background: "var(--matte-background)", scrollbarColor: "var(--gray-500) transparent", outlineColor: "var(--border-color)" }}>

                                        <DropdownLabel style={{ fontSize: "var(--size-xsm)" }} label="Settings" />

                                        <DropdownGroup>
                                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-sub-item" data-value="dropdown-sub-item" name="storage" id="storage" onClick={() => alert("storage selected")}>
                                                Storage
                                                <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                                    ⌘S
                                                </DropdownItemShortcut>
                                            </DropdownItem>
                                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-sub-item" data-value="dropdown-sub-item" name="module" id="module" onClick={() => alert("module selected")}>
                                                Module
                                                <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                                    ⌘M
                                                </DropdownItemShortcut>
                                            </DropdownItem>
                                        </DropdownGroup>

                                        <DropdownGroupSeparator />

                                        <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-sub-item" data-value="dropdown-sub-item" name="more" id="more" onClick={() => alert("more selected")}>
                                            More...
                                        </DropdownItem>
                                    </DropdownSubContent>
                                </DropdownSub>
                            </DropdownGroup>
                            <DropdownGroupSeparator />
                            <DropdownGroup>
                                <DropdownItem style={{ fontSize: "var(--size-xsm)" }}>
                                    {trashIcon}
                                    Trash
                                </DropdownItem>
                            </DropdownGroup>
                        </DropdownContent>
                    </Dropdown>
                </ButtonGroup>
            </div>
        </div>
    )
};

export default App;