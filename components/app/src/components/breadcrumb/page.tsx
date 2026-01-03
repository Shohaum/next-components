// utilities
import Link from "next/link";
// component imports
import BreadcrumbEllipsis from "@/components/breadcrumb/breadcrumbEllipsis";
import BreadcrumbLink from "@/components/breadcrumb/breadcrumbLink";
import BreadcrumbPage from "@/components/breadcrumb/breadcrumbPage";
import BreadcrumbItem from "@/components/breadcrumb/breadcrumbItem";
import BreadcrumbList from "@/components/breadcrumb/breadcrumbList";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import BreadcrumbSeparator from "@/components/breadcrumb/breadcrumbSeparator";
import Dropdown from "@/components/dropdown/dropdown";
import DropdownTrigger from "@/components/dropdown/dropdownTrigger";
import DropdownContent from "@/components/dropdown/dropdownContent";
import DropdownItem from "@/components/dropdown/dropdownItem";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* breadcrumb */}
            <div style={{ width: "fit-content", height: "fit-content" }}>
                <Breadcrumb style={{ fontSize: "var(--size-xsm)", lineHeight: "1.25rem", letterSpacing: "0.5px" }}>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Dropdown>
                                <DropdownTrigger>
                                    <BreadcrumbEllipsis />
                                    <span className="sr-only">Toggle menu</span>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem>Documentation</DropdownItem>
                                    <DropdownItem>Themes</DropdownItem>
                                    <DropdownItem>GitHub</DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/docs/components">Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </main >
    )
};

export default App;