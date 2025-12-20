// CSS
import styles from "@/components/dropdown/dropdownSubContent.module.css";
// types
import { DropdownSubContentProps } from "@/types/dropdown/dropdown";
const DropdownSubContent = ({ children }: DropdownSubContentProps) => {

    return (
        <div data-slot="dropdown-sub" id="dropdownSub" popover="auto" className={styles.dropdownSubContent}>
            {children}
        </div>
    )
};

export default DropdownSubContent;