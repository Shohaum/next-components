// CSS
import styles from "@/components/dropdown/dropdownContent.module.css";
// types
import { DropdownContentProps } from "@/types/dropdown/dropdown";
const DropdownContnet = ({ children }: DropdownContentProps) => {
    return (
        <div data-slot="dropdown" id="dropdown" popover="auto" className={`${styles.dropdownContent}`}>
            {children}
        </div>
    )
};

export default DropdownContnet;