// CSS
import styles from "@/components/dropdown/dropdownContent.module.css";
// types
import { DropdownContentProps } from "@/types/dropdown/dropdown";
const DropdownContnet = ({ children, width = 'min-content', minWidth = 'min-content', maxWidth = 'min-content', ...props }: DropdownContentProps) => {
    return (
        <div {...props} style={{ width, minWidth, maxWidth }} data-slot="dropdown" id="dropdown" popover="auto" className={`${styles.dropdownContent}`}>
            {children}
        </div>
    )
};

export default DropdownContnet;