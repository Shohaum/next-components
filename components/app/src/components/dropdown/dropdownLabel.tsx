// CSS
import styles from "@/components/dropdown/dropdownLabel.module.css";

type DropdownLabelProps = {
    label: string;
}

const DropdownLabel = ({ label }: DropdownLabelProps) => {
    return (
        <span className={styles.dropdownLabel}>
            {label}
        </span>
    )
}

export default DropdownLabel;