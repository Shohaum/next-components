"use client";
// CSS
import styles from "@/components/dropdown/dropdownTrigger.module.css";
// contexts
import { useDropdown } from "@/contexts/dropdown";
// types
import { DropDownTriggerProps } from "@/types/dropdown/dropdown";

const DropDownTrigger = ({ children }: DropDownTriggerProps) => {

    const { toggleDropdown } = useDropdown();

    return (
        <div className={styles.dropdownTrigger} popoverTarget="dropdown" onClick={() => toggleDropdown()}>
            {children}
        </div>
    )
};

export default DropDownTrigger;