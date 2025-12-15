// CSS
import styles from "@/components/dropdown/dropdownSubContent.module.css";
type DropdownSubContentProps = {
    children: React.ReactNode;
}

const DropdownSubContent = ({ children }: DropdownSubContentProps) => {

    return (
        <div data-value="dropdownSub" id="dropdownSub" popover="auto" className={styles.dropdownSubContent}>
            {children}
        </div>
    )
};

export default DropdownSubContent;