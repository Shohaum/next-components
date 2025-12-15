// CSS
import styles from "@/components/dropdown/dropdownPortal.module.css"

type DropdownPortalProps = {
    children: React.ReactNode;
}

const DropdownPortal = ({ children }: DropdownPortalProps) => {

    return (
        <div className={styles.dropdownPortal}>
            {children}
        </div>
    )
};

export default DropdownPortal;