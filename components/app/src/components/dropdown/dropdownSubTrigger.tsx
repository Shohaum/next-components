"use client";
// CSS
import styles from "@/components/dropdown/dropdownSubTrigger.module.css";
// custom hook
import { useDropdownSub } from "@/contexts/dropdown";
// types
import { DropdownSubTriggerProps } from "@/types/dropdown/dropdown";

const DropdownSubTrigger = ({ children }: DropdownSubTriggerProps) => {

    const { toggleDropdownSub } = useDropdownSub();

    return (
        <div className={styles.dropdownSubTrigger} popoverTarget="dropdownSub" onClick={() => toggleDropdownSub()}>
            {children}
        </div>
    )
};

export default DropdownSubTrigger;