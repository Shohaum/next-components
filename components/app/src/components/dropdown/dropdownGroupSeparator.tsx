// CSS
import styles from "@/components/dropdown/dropdownGroupSeparator.module.css";
// types
import { DropdownGroupSeparatorProps } from "@/types/dropdown/dropdown";

const DropdownGroupSeparator: React.FC<DropdownGroupSeparatorProps> = () => {
    return (
        <span className={styles.separator} />
    )
}

export default DropdownGroupSeparator;