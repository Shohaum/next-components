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
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z" fill="currentColor">
            </path>
        </svg>
    const moreIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor">
            </path>
        </svg>

    const trashIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z" fill="currentColor">
            </path>
        </svg>

    const tagIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1.5H6.34315C7.00619 1.5 7.64207 1.76339 8.11091 2.23223L13.8787 8L8 13.8787L2.23223 8.11091C1.76339 7.64207 1.5 7.00619 1.5 6.34315V1.5ZM16 8L14.9393 6.93934L9.17157 1.17157C8.42143 0.421427 7.40401 0 6.34315 0H1.5H0V1.5V6.34315C0 7.40401 0.421426 8.42143 1.17157 9.17157L6.93934 14.9393L8 16L9.06066 14.9393L14.9393 9.06066L16 8ZM4.5 5.25C4.91421 5.25 5.25 4.91421 5.25 4.5C5.25 4.08579 4.91421 3.75 4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5C3.75 4.91421 4.08579 5.25 4.5 5.25Z" fill="currentColor">
            </path>
        </svg>

    const filterIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 0H1.75H14.25H15V0.75V3V3.31066L14.7803 3.53033L10.5 7.81066V15.25V16H9.75H9H8.7816L8.59734 15.8827L5.84734 14.1327L5.5 13.9117V13.5V7.81066L1.21967 3.53033L1 3.31066V3V0.75V0ZM2.5 1.5V2.68934L6.78033 6.96967L7 7.18934V7.5V13.0883L9 14.361V7.5V7.18934L9.21967 6.96967L13.5 2.68934V1.5H2.5Z" fill="currentColor">
            </path>
        </svg>

    const calendarIcon =
        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z" fill="currentColor">
            </path>
        </svg>

    return (
        <div>
            <ButtonGroup>
                <ButtonGroup className="hidden sm:flex">
                    <Button aria-label="Go Back">
                        {backIcon}
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>Archive</Button>
                    <Button>Report</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>Snooze</Button>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button aria-label="More Options">
                                {moreIcon}
                            </Button>
                        </DropdownTrigger>
                        <DropdownContent>
                            <DropdownGroup>
                                <DropdownItem>
                                    Mark as Read
                                </DropdownItem>
                                <DropdownItem>
                                    Archive
                                </DropdownItem>
                            </DropdownGroup>
                            <DropdownGroupSeparator />
                            <DropdownGroup>
                                <DropdownItem>
                                    Snooze
                                </DropdownItem>
                                <DropdownItem>
                                    {calendarIcon}
                                    Add to Calendar
                                </DropdownItem>
                                <DropdownItem>
                                    {filterIcon}
                                    Add to List
                                </DropdownItem>
                                <DropdownSub>
                                    <DropdownSubTrigger>
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
                                <DropdownItem>
                                    {trashIcon}
                                    Trash
                                </DropdownItem>
                            </DropdownGroup>
                        </DropdownContent>
                    </Dropdown>
                </ButtonGroup>
            </ButtonGroup>
        </div>
    )
};

export default App;