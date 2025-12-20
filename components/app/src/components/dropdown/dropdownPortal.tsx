// CSS
import styles from "@/components/dropdown/dropdownPortal.module.css"
// types
import { DropdownPortalProps } from "@/types/dropdown/dropdown";
const DropdownPortal = ({ children }: DropdownPortalProps) => {

    return (
        <div className={styles.dropdownPortal}>
            {children}
        </div>
    )
};

export default DropdownPortal;