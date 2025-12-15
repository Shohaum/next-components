// CSS
import styles from "@/components/dropdown/dropdownItemShortcut.module.css";

type DropdownItemShortcutProps = {
    children: React.ReactNode;
}

const DropdownItemShortcut = ({ children }: DropdownItemShortcutProps) => {
    return (
        <span className={styles.dropdownItemShortcut}>
            {children}
        </span>
    )
}

export default DropdownItemShortcut;