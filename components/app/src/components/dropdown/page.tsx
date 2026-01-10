"use client"
// component imports
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
import Button from "@/components/button/button";

const App = () => {

    const dropdownIcon =
        <svg width="13" height="13" stroke="currentColor" strokeWidth={0} fill="currentColor" strokeLinejoin="round" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.53032 2.96966L3.99999 2.43933L2.93933 3.49999L3.46966 4.03032L7.29289 7.85355C7.68341 8.24407 8.31658 8.24407 8.7071 7.85354L12.5303 4.03032L13.0607 3.49999L12 2.43933L11.4697 2.96966L7.99999 6.43933L4.53032 2.96966ZM4.53032 7.96966L3.99999 7.43933L2.93933 8.49999L3.46966 9.03032L7.29289 12.8535C7.68341 13.2441 8.31658 13.2441 8.7071 12.8535L12.5303 9.03032L13.0607 8.49999L12 7.43933L11.4697 7.96966L7.99999 11.4393L4.53032 7.96966Z" fill="currentColor">

            </path>
        </svg>

    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                {/* dropdown */}
                <Dropdown>

                    <DropdownTrigger asChild>
                        <Button style={{ background: "var(--matte-background)", fontSize: "var(--size-xsm)" }} title="dropdown" name="dropdown" type="button">
                            <span>Dropdown</span>
                            <span>{dropdownIcon}</span>
                        </Button>
                    </DropdownTrigger>

                    <DropdownContent style={{ width: "min(11rem, 50vw)", minWidth: "8rem", maxWidth: "17.93rem", maxHeight: "20rem", background: "var(--matte-background)", scrollbarColor: "var(--gray-500) transparent", outlineColor: "var(--border-color)" }}>

                        <DropdownLabel style={{ fontSize: "var(--size-xsm)" }} label="Dropdown" />
                        <DropdownGroup>

                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} name="chevron" title="chevron" role="dropdown-item" data-value="dropdown-item" id="chevron" disabled={false} onClick={() => alert("chevron selected")}>
                                Chevron
                                <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                    ⌘C
                                </DropdownItemShortcut>
                            </DropdownItem>

                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="profile" disabled={false} onClick={() => alert("profile selected")}>
                                Profile
                                <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                    ⌘P
                                </DropdownItemShortcut>
                            </DropdownItem>

                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="command" disabled={false} onClick={() => alert("command selected")}>
                                Command
                                <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                    ⇧⌘K
                                </DropdownItemShortcut>
                            </DropdownItem>

                        </DropdownGroup>

                        <DropdownGroupSeparator />

                        <DropdownSub>
                            <DropdownSubTrigger style={{ fontSize: "var(--size-xsm)" }}>
                                Settings
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

                        <DropdownGroupSeparator />

                        <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="slack" disabled={true} onClick={() => alert("slack selected")}>
                            Slack
                        </ DropdownItem>

                        <DropdownGroup>

                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="github" disabled={false} onClick={() => alert("github selected")}>
                                Github
                            </DropdownItem>

                            <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="vercel" disabled={false} onClick={() => alert("vercel selected")}>
                                Vercel
                            </DropdownItem>

                        </DropdownGroup>

                        <DropdownGroupSeparator />

                        <DropdownItem style={{ fontSize: "var(--size-xsm)" }} variant="destructive" role="dropdown-item" data-value="dropdown-item" id="logout" disabled={false} onClick={() => alert("logout selected")}>
                            Trash
                            <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                ⌘Q
                            </DropdownItemShortcut>
                        </DropdownItem>

                        <DropdownItem style={{ fontSize: "var(--size-xsm)" }} role="dropdown-item" data-value="dropdown-item" id="more" disabled={false} onClick={() => alert("more selected")}>
                            More...
                            <DropdownItemShortcut style={{ color: "var(--gray-900)" }}>
                                ⌘V
                            </DropdownItemShortcut>
                        </DropdownItem>

                    </DropdownContent>

                </Dropdown>
            </div>
        </main >
    )
};

export default App;