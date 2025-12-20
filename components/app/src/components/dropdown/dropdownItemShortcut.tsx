// CSS
import styles from "@/components/dropdown/dropdownItemShortcut.module.css";
// types
import { DropdownItemShortcutProps } from "@/types/dropdown/dropdown";
const DropdownItemShortcut = ({ children }: DropdownItemShortcutProps) => {
    return (
        <span className={styles.dropdownItemShortcut}>
            {children}
        </span>
    )
}

export default DropdownItemShortcut;