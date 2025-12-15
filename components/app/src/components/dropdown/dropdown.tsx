"use client";
// CSS
import styles from "./dropdown.module.css";
// contexts
import { DropdownProvider } from "@/contexts/dropdown";

type DropdownProps = {
    children: React.ReactNode;
}

const Dropdown = ({ children }: DropdownProps) => {

    return (

        <div className={styles.dropdown}>
            <DropdownProvider>
                {children}
            </DropdownProvider>
        </div>

    )
};

export default Dropdown;