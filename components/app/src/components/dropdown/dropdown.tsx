"use client";
// CSS
import styles from "./dropdown.module.css";
// contexts
import { DropdownProvider } from "@/contexts/dropdown";
// types
import { DropdownProps } from "@/types/dropdown/dropdown";

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