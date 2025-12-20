// CSS
import styles from "@/components/dropdown/dropdownLabel.module.css";
// types
import { DropdownLabelProps } from "@/types/dropdown/dropdown";

const DropdownLabel = ({ label }: DropdownLabelProps) => {
    return (
        <span className={styles.dropdownLabel}>
            {label}
        </span>
    )
}

export default DropdownLabel;