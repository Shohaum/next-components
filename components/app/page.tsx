"use client"
// CSS
import styles from "./app.module.css";
// Component imports
import Theme from "./src/components/theme/theme";
// component imports
import DropDown from "./src/components/dropdown/dropdown";
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

import Button from "@/components/button/button";
import LinkDocker from "@/components/dockingStation/linkDocker";
import DockItem from "@/components/dockingStation/dockItem";
import Link from "next/link";
import Magnet from "@/components/dockingStation/magnet";
import DockList from "@/components/dockingStation/dockList";

import DottedGrid from "@/components/grids/dottedGrid";

import Table from "@/components/table/table";
import TableBody from "@/components/table/tableBody";
import TableRow from "@/components/table/tableRow";
import TableHead from "@/components/table/tableHead";
import TableHeadCell from "@/components/table/tableHeadCell";
import TableData from "@/components/table/tableData";

import Accordion from "@/components/accordion/accordion";
import AccordionItem from "@/components/accordion/accordionItem";
import AccordionItemTrigger from "@/components/accordion/accordionItemTrigger";
import AccordionItemContent from "@/components/accordion/accordionItemContent";

import AlertDialog from "@/components/alertDialog/alertDialog";
import AlertDialogTrigger from "@/components/alertDialog/alertDialogTrigger";
import AlertDialogContent from "@/components/alertDialog/alertDialogContent";
import AlertDialogHeader from "@/components/alertDialog/alertDialogHeader";
import AlertDialogFooter from "@/components/alertDialog/alertDialogFooter";
import AlertDialogTitle from "@/components/alertDialog/alertDialogTitle";
import AlertDialogDescription from "@/components/alertDialog/alertDialogDescription";
import AlertDialogAction from "@/components/alertDialog/alertDialogAction";
import AlertDialogCancel from "@/components/alertDialog/alertDialogCancel";

import Alert from "@/components/alert/alert";
import AlertItem from "@/components/alert/alertItem";
import AlertTitle from "@/components/alert/alertTitle";
import AlertDescription from "@/components/alert/alertDescription";

import AspectRatio from "@/components/aspectRatio/aspectRatio";

import { data } from "@/data/data";
import Image from "next/image";

import Avatar from "@/components/avatar/avatar";
import AvatarImage from "@/components/avatar/avatarImage";
import AvatarFallback from "@/components/avatar/avatarFallback";
import AvatarCollapsed from "@/components/avatar/avatarCollapsed";

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

                {/* docking station */}
                {/* <LinkDocker>

                    <DockList>
                        <Magnet />
                        <DockItem>
                            <Link href={"/cloudflare"}>
                                <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16"><path fill="currentColor" d="M10.9441 11.008C10.9956 10.8717 11.0138 10.7251 10.9971 10.5804C10.9804 10.4356 10.9293 10.297 10.8481 10.176C10.7648 10.0761 10.6625 9.99351 10.5472 9.93311C10.4319 9.87271 10.3058 9.83564 10.1761 9.82402L4.60814 9.76002C4.57614 9.76002 4.54414 9.72802 4.51214 9.72802C4.50469 9.72243 4.49864 9.71518 4.49447 9.70685C4.49031 9.69852 4.48814 9.68933 4.48814 9.68002C4.48814 9.6707 4.49031 9.66151 4.49447 9.65318C4.49864 9.64485 4.50469 9.6376 4.51214 9.63202C4.54414 9.56802 4.57614 9.53602 4.64014 9.53602L10.2401 9.47202C10.5957 9.43256 10.9343 9.29911 11.2211 9.08539C11.5079 8.87167 11.7326 8.5854 11.8721 8.25602L12.1921 7.42402C12.1921 7.39202 12.2241 7.36002 12.1921 7.32802C12.0182 6.55311 11.596 5.85618 10.9898 5.34312C10.3835 4.83006 9.62638 4.52893 8.83338 4.48548C8.04037 4.44202 7.25486 4.65863 6.5962 5.10238C5.93754 5.54612 5.44174 6.19276 5.18414 6.94402C4.84973 6.70518 4.44182 6.59187 4.03214 6.62402C3.65616 6.66594 3.30563 6.8345 3.03813 7.102C2.77062 7.3695 2.60206 7.72004 2.56014 8.09602C2.53883 8.28846 2.54965 8.48311 2.59214 8.67202C1.9838 8.68883 1.40603 8.94233 0.981719 9.37859C0.557411 9.81485 0.320056 10.3994 0.32014 11.008C0.314889 11.1263 0.325653 11.2447 0.35214 11.36C0.353609 11.385 0.364196 11.4086 0.381891 11.4263C0.399586 11.444 0.42316 11.4545 0.448141 11.456H10.7201C10.7841 11.456 10.8481 11.424 10.8481 11.36L10.9441 11.008Z"></path>
                                    <path fill="currentColor" d="M12.7038 7.42401H12.5438C12.5118 7.42401 12.4798 7.45601 12.4478 7.48801L12.2238 8.25601C12.1723 8.3923 12.1542 8.53893 12.1709 8.68366C12.1876 8.82839 12.2386 8.96703 12.3198 9.08801C12.4032 9.18798 12.5054 9.27052 12.6207 9.33092C12.7361 9.39132 12.8621 9.42839 12.9918 9.44001L14.1758 9.50401C14.2078 9.50401 14.2398 9.53601 14.2718 9.53601C14.2792 9.5416 14.2853 9.54885 14.2895 9.55718C14.2936 9.56551 14.2958 9.5747 14.2958 9.58401C14.2958 9.59333 14.2936 9.60251 14.2895 9.61084C14.2853 9.61918 14.2792 9.62642 14.2718 9.63201C14.2398 9.69601 14.2078 9.72801 14.1438 9.72801L12.9278 9.79201C12.5723 9.83147 12.2337 9.96492 11.9468 10.1786C11.66 10.3924 11.4353 10.6786 11.2958 11.008L11.2318 11.296C11.1998 11.328 11.2318 11.392 11.2958 11.392H15.5198C15.5328 11.3939 15.5461 11.3927 15.5586 11.3885C15.5711 11.3843 15.5825 11.3773 15.5918 11.368C15.6011 11.3587 15.6081 11.3473 15.6123 11.3348C15.6165 11.3223 15.6177 11.3091 15.6158 11.296C15.692 11.0249 15.735 10.7455 15.7438 10.464C15.7387 9.65932 15.4168 8.88903 14.8478 8.32001C14.2788 7.751 13.5085 7.42908 12.7038 7.42401Z"></path>
                                </svg>
                            </Link>
                        </DockItem>

                        <DockItem>
                            <Link href={"/bitbucket"}>
                                <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16"><path d="M15.0132 1.00004C15.0833 0.999103 15.1528 1.01411 15.2168 1.04401C15.2807 1.07391 15.3376 1.11798 15.3834 1.17313C15.4292 1.22827 15.4628 1.29315 15.4819 1.36322C15.501 1.43328 15.505 1.50683 15.4938 1.57869L13.4536 14.4338C13.4282 14.5911 13.3502 14.7341 13.2333 14.8376C13.1164 14.9411 12.9681 14.9986 12.8144 15H3.02696C2.91176 15.0015 2.79987 14.96 2.71166 14.8831C2.62344 14.8062 2.56478 14.699 2.54636 14.5809L0.506198 1.58119C0.494969 1.50932 0.499032 1.43577 0.518103 1.36571C0.537173 1.29565 0.570788 1.23077 0.616589 1.17562C0.662389 1.12048 0.719264 1.07641 0.783219 1.04651C0.847176 1.0166 0.916662 1.0016 0.986801 1.00254L15.0132 1.00004ZM6.42242 10.2909H9.54634L10.3922 5.70409H5.66547L6.42242 10.2909Z" fill="#2684FF"></path>
                                    <path d="M1.15503 5.70409H5.66549L6.42244 10.2909H9.54636L13.235 14.8353C13.1181 14.9403 12.969 14.9986 12.8145 15H3.02458C2.90938 15.0015 2.79749 14.96 2.70927 14.8831C2.62106 14.8062 2.5624 14.699 2.54397 14.5809L1.15503 5.70409Z" fill="url(#paint0_linear_872_3184)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_872_3184" x1="0.112125" y1="6.9886" x2="7.77447" y2="12.7502" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.18" stopColor="#0052CC"></stop>
                                            <stop offset="1" stopColor="#2684FF"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </DockItem>

                        <DockItem>
                            <Link href={"/vercel"}>
                                <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </DockItem>

                        <DockItem>
                            <Link href={"/angular"}>
                                <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16"><path d="M8 0L0.5 2.656L1.64393 12.504L8 16L14.3561 12.504L15.5 2.656L8 0Z" fill="#DD0031"></path>
                                    <path d="M8 0V1.776V1.768V9.872V16L14.3561 12.504L15.5 2.656L8 0Z" fill="#C3002F"></path>
                                    <path d="M8.00003 1.768L3.31152 12.208H5.05964L6.00218 9.872H9.98177L10.9243 12.208H12.6724L8.00003 1.768ZM9.36952 8.432H6.63053L8.00003 5.16L9.36952 8.432Z" fill="white"></path>
                                </svg>
                            </Link>

                        </DockItem>

                        <DockItem>
                            <Link href={"/slack"}>
                                <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16"><g clipPath="url(#clip0_872_3152)">
                                    <path d="M3.42681 10.0787C3.42681 10.9984 2.68351 11.7417 1.76382 11.7417C0.844137 11.7417 0.10083 10.9984 0.10083 10.0787C0.10083 9.15906 0.844137 8.41575 1.76382 8.41575H3.42681V10.0787ZM4.25831 10.0787C4.25831 9.15906 5.00162 8.41575 5.9213 8.41575C6.84099 8.41575 7.58429 9.15906 7.58429 10.0787V14.2362C7.58429 15.1559 6.84099 15.8992 5.9213 15.8992C5.00162 15.8992 4.25831 15.1559 4.25831 14.2362V10.0787Z" fill="#E01E5A"></path>
                                    <path d="M5.92121 3.40158C5.00152 3.40158 4.25821 2.65827 4.25821 1.73858C4.25821 0.818899 5.00152 0.075592 5.92121 0.075592C6.84089 0.075592 7.5842 0.818899 7.5842 1.73858V3.40158H5.92121ZM5.92121 4.24567C6.84089 4.24567 7.5842 4.98898 7.5842 5.90866C7.5842 6.82835 6.84089 7.57165 5.92121 7.57165H1.75113C0.831442 7.57165 0.0881348 6.82835 0.0881348 5.90866C0.0881348 4.98898 0.831442 4.24567 1.75113 4.24567H5.92121Z" fill="#36C5F0"></path>
                                    <path d="M12.5858 5.90866C12.5858 4.98898 13.3291 4.24567 14.2488 4.24567C15.1685 4.24567 15.9118 4.98898 15.9118 5.90866C15.9118 6.82835 15.1685 7.57165 14.2488 7.57165H12.5858V5.90866ZM11.7543 5.90866C11.7543 6.82835 11.011 7.57165 10.0913 7.57165C9.17165 7.57165 8.42834 6.82835 8.42834 5.90866V1.73858C8.42834 0.818899 9.17165 0.075592 10.0913 0.075592C11.011 0.075592 11.7543 0.818899 11.7543 1.73858V5.90866Z" fill="#2EB67D"></path>
                                    <path d="M10.0913 12.5732C11.011 12.5732 11.7543 13.3165 11.7543 14.2362C11.7543 15.1559 11.011 15.8992 10.0913 15.8992C9.17165 15.8992 8.42834 15.1559 8.42834 14.2362V12.5732H10.0913ZM10.0913 11.7417C9.17165 11.7417 8.42834 10.9984 8.42834 10.0787C8.42834 9.15906 9.17165 8.41575 10.0913 8.41575H14.2614C15.1811 8.41575 15.9244 9.15906 15.9244 10.0787C15.9244 10.9984 15.1811 11.7417 14.2614 11.7417H10.0913Z" fill="#ECB22E"></path>
                                </g>
                                    <defs>
                                        <clipPath id="clip0_872_3152">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </DockItem>

                    </DockList>
                </LinkDocker> */}

                {/* dropdown */}
                {/* <DropDown>

                    <DropdownTrigger>
                        <Button title="dropdown" name="dropdown" type="button">
                            <span>Dropdown</span>
                            <span>{dropdownIcon}</span>
                        </Button>
                    </DropdownTrigger>

                    <DropdownContent>

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

                </DropDown> */}

                {/* Table */}
                {/* <Table>  
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
                </Table> */}

                {/* Accordion */}
                {/* <Accordion textWrap="wrap" isMultiple={false}>
                    <AccordionItem id="item-1">
                        <AccordionItemTrigger>Product Information</AccordionItemTrigger>
                        <AccordionItemContent>
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionItemContent>
                    </AccordionItem>

                    <AccordionItem id="item-2">
                        <AccordionItemTrigger>Shipping Details</AccordionItemTrigger>
                        <AccordionItemContent>
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured.
                                Track your shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionItemContent>
                    </AccordionItem>

                    <AccordionItem id="item-3">
                        <AccordionItemTrigger>Return Policy</AccordionItemTrigger>
                        <AccordionItemContent>
                            <p>
                                We stand behind our products with a comprehensive 30-day return policy. 
                                If you're not completely satisfied, simply return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.
                            </p>
                        </AccordionItemContent>
                    </AccordionItem>
                </Accordion> */}

                {/* AlertDialog */}
                {/* <AlertDialog>

                    <AlertDialogTrigger>
                        <Button>
                            Show Dialog
                        </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>

                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => alert("Conitue clicked")}>Continue</AlertDialogAction>
                            </AlertDialogFooter>

                        </AlertDialogHeader>
                    </AlertDialogContent>

                </AlertDialog> */}

                {/* Alert */}
                {/* <Alert>
                    
                    <AlertItem type="normal">
                        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.25002 7H7.00002H7.75C8.30229 7 8.75 7.44772 8.75 8V11.5V12.25H7.25V11.5V8.5H7.00002H6.25002V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="currentColor">
                            </path>
                        </svg>
                        <AlertTitle>This is a normal alert</AlertTitle>
                        <AlertDescription>
                            This is an alert with icon, title and description.
                        </AlertDescription>
                    </AlertItem>

                    <AlertItem type="success">
                        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" fill="currentColor">
                            </path>
                        </svg>
                        <AlertTitle>Success! Your changes have been saved</AlertTitle>
                        <AlertDescription>
                            This is an alert with icon, title and description.
                        </AlertDescription>
                    </AlertItem>

                    <AlertItem type="warn">
                        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z" fill="currentColor">
                            </path>
                        </svg>
                        <AlertTitle>
                            This Alert has a title and an icon. No description.
                        </AlertTitle>
                    </AlertItem>

                    <AlertItem type="failure">
                        <svg width="16" height="16" strokeLinejoin="round" viewBox="0 0 16 16">
                            <path d="M7.97723 14.618C12.0892 14.618 15.4222 11.9264 15.4222 8.60708C15.4222 6.54891 14.1461 4.73091 12.1844 3.65267C11.3861 3.20905 10.759 2.81086 10.237 2.47986C9.25394 1.85519 8.64731 1.47006 7.97723 1.47006C7.29656 1.47006 6.52942 1.95723 5.51651 2.59994C4.94586 2.96994 4.36319 3.32104 3.76943 3.65267C1.80832 4.73091 0.532227 6.54891 0.532227 8.60708C0.532227 11.9264 3.86524 14.618 7.97723 14.618ZM7.10804 3.5245C7.31503 3.0534 7.42039 2.54396 7.41727 2.0294C7.41727 1.93981 7.54232 1.91368 7.55974 2.01198C7.96789 3.73853 6.99978 4.59403 6.28365 4.88023C6.2065 4.91009 6.15984 4.80557 6.21957 4.75081C6.59987 4.41015 6.90282 3.99201 7.10804 3.5245ZM8.38476 3.46104C8.32588 2.95511 8.16048 2.4674 7.89945 2.03002V2.02069C7.85715 1.94416 7.95296 1.85706 8.01456 1.91368C9.23154 3.22336 8.82526 4.43661 8.35925 5.04759C8.30823 5.11106 8.21677 5.04573 8.24228 4.9692C8.39526 4.48208 8.44381 3.96818 8.38476 3.46104ZM9.48664 3.11324C9.23704 2.67272 8.89614 2.29067 8.48679 1.99269V1.98398C8.41711 1.9311 8.47186 1.81351 8.5571 1.84835C10.1673 2.52279 10.278 3.82128 10.0827 4.58283C10.0787 4.60082 10.068 4.61663 10.0528 4.627C10.038 4.63744 10.0197 4.64159 10.0019 4.63856C9.98404 4.63553 9.96813 4.62556 9.95762 4.61082C9.94674 4.59594 9.94185 4.57751 9.94394 4.55918C9.89446 4.05049 9.73866 3.55787 9.48664 3.11324ZM6.33094 3.46104C5.94768 3.7995 5.53517 3.93265 5.05049 4.08135C4.97832 4.08135 4.92979 4.03282 4.95406 3.96936C6.041 3.40504 6.428 2.94587 6.81437 2.2453C6.81437 2.2453 6.91081 2.1725 6.93134 2.29818C6.93134 2.4867 6.71482 3.12257 6.33094 3.46104ZM9.39891 10.4326C9.31077 10.8068 9.10728 11.144 8.81717 11.3963C8.60236 11.6109 8.32122 11.7464 8.01954 11.7808C7.70893 11.7517 7.41803 11.6159 7.19639 11.3963C6.90907 11.1429 6.70827 10.8059 6.62212 10.4326C6.61932 10.4105 6.62143 10.388 6.62832 10.3668C6.6352 10.3456 6.64668 10.3262 6.66194 10.31C6.67721 10.2941 6.69593 10.282 6.71665 10.2746C6.73737 10.2671 6.75953 10.2645 6.7814 10.2671H9.2415C9.26323 10.2646 9.28523 10.2673 9.30575 10.2749C9.32628 10.2824 9.34475 10.2947 9.35971 10.3106C9.37492 10.3267 9.38633 10.346 9.39311 10.3671C9.39989 10.3882 9.40187 10.4106 9.39891 10.4326ZM6.01238 9.08243C5.78772 9.23606 5.51588 9.30511 5.24513 9.27732C4.97438 9.24953 4.72223 9.12669 4.53346 8.93062C4.34125 8.73122 4.22228 8.47257 4.19595 8.19687C4.16963 7.92116 4.2375 7.64467 4.3885 7.4125C4.51729 7.21465 4.70083 7.06097 4.91486 6.97013C5.12854 6.87911 5.36485 6.85524 5.59241 6.90169C5.81951 6.94835 6.02856 7.06346 6.19219 7.23144C6.35645 7.39943 6.46782 7.61471 6.51262 7.8474C6.55783 8.08089 6.53449 8.32248 6.44542 8.543C6.35723 8.7613 6.2066 8.94934 6.01238 9.08243ZM11.2829 9.08554C11.0578 9.23817 10.786 9.30617 10.5156 9.27747C10.2453 9.24877 9.99378 9.12522 9.80581 8.92875C9.5869 8.70107 9.46508 8.39719 9.4661 8.08134C9.4661 7.84305 9.53454 7.60973 9.66458 7.41188C9.79337 7.21402 9.97691 7.05972 10.1916 6.96951C10.4056 6.87878 10.6421 6.85535 10.8697 6.90231C11.0975 6.9496 11.3065 7.0647 11.4701 7.23393C11.6338 7.40317 11.7439 7.61782 11.7887 7.85176C11.8329 8.08555 11.8085 8.32714 11.7184 8.54735C11.6295 8.76577 11.4779 8.95301 11.2829 9.08554Z" fill="currentColor"></path>
                        </svg>
                        <AlertTitle>Unable to process your payment.</AlertTitle>
                        <AlertDescription>
                            <p>Please verify your billing information and try again.</p>
                            <ul>
                                <li>Check your card details</li>
                                <li>Ensure sufficient funds</li>
                                <li>Verify billing address</li>
                            </ul>
                        </AlertDescription>
                    </AlertItem>
                </Alert> */}


                {/* <AspectRatio width={330} ratio={16/9} rounded="medium">
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill/>
                </AspectRatio> */}

                {/* Avatar */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem' }}>

                    <Avatar width={40}>
                        <AvatarImage grayScale={true} src="https://github.com/deno.png" alt="@deno" />
                        <AvatarFallback>DN</AvatarFallback>
                    </Avatar>

                    <Avatar showTooltip={true} name="Vercel" designation="SDE - Vercel" width={50}>
                        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                        <AvatarFallback>MB</AvatarFallback>
                    </Avatar>

                    <AvatarCollapsed>

                        <Avatar showTooltip={true} name="Shohaum" designation="Founder - Shohaum" width={40}>
                            <AvatarImage src="https://github.com/shohaum.png" alt="@shohaum" />
                            <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Redis" designation="Redis Developer" width={40}>
                            <AvatarImage src="https://github.com/redis.png" alt="@redis" />
                            <AvatarFallback>RR</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Excalidraw" designation="Product Lead - Excalidraw" width={40}>
                            <AvatarImage src="https://github.com/excalidraw.png" alt="@excalidraw" />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Evil Rabbit" designation="Product Designer" width={40}>
                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="OpenAI" designation="Founder - OpenAI" width={40}>
                            <AvatarImage src="https://github.com/openai.png" alt="@openai" />
                            <AvatarFallback>OA</AvatarFallback>
                        </Avatar>

                    </AvatarCollapsed>
                </div>

            </DottedGrid>

        </main>
    )
};

export default App;